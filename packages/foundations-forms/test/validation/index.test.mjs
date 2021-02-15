/**
 * @jest-environment jsdom
 */

import fs from 'fs';

import {
  validate,
  validateGroup,
} from '../../src/validation/index.mjs';

const { readFile } = fs.promises;

describe('Form validation (automatic)', () => {
  describe('Single fields', () => {
    describe('Text input', () => {
      let error;
      let input;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/text.html');
        error = document.getElementById('full-name-1-error');
        input = document.getElementById('full-name-1');
      });

      test('Marks up empty field as required', () => {
        input.value = '';

        validate(input, {
          required: 'Enter your example field',
          invalid: 'Enter a valid example field',
        });

        expect(input.classList).toContain('coop-form__invalid');
        expect(error.textContent).toBe('Enter your example field');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up non-matching field as invalid', () => {
        input.pattern = '[0-9]*';
        input.value = 'Hello world';

        validate(input, {
          required: 'Enter your example field',
          invalid: 'Enter a valid example field',
        });

        expect(input.classList).toContain('coop-form__invalid');
        expect(error.textContent).toBe('Enter a valid example field');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up matching field as valid', () => {
        input.pattern = '[A-Za-z ]*';
        input.value = 'Hello world';

        validate(input, {
          required: 'Enter your example field',
          invalid: 'Enter a valid example field',
        });

        expect(input.classList).not.toContain('coop-form__invalid');
        expect(error.textContent).toBe('');
        expect(error.hasAttribute('hidden')).toBe(true);
      });
    });

    describe('Textarea', () => {
      let error;
      let textarea;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/textarea.html');
        error = document.getElementById('feedback-1-error');
        textarea = document.getElementById('feedback-1');
      });

      test('Marks up empty field as required', () => {
        textarea.value = '';

        validate(textarea, {
          required: 'Enter your example field',
          invalid: 'Enter a valid example field',
        });

        expect(textarea.classList).toContain('coop-form__invalid');
        expect(error.textContent).toBe('Enter your example field');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up filled field as valid', () => {
        textarea.value = 'Hello world';

        validate(textarea, {
          required: 'Enter your example field',
          invalid: 'Enter a valid example field',
        });

        expect(textarea.classList).not.toContain('coop-form__invalid');
        expect(error.textContent).toBe('');
        expect(error.hasAttribute('hidden')).toBe(true);
      });
    });

    describe('Select', () => {
      let error;
      let select;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/selects.html');
        error = document.getElementById('sort-by-1-error');
        select = document.getElementById('sort-by-1');
        select.selectedIndex = 0; // "Please select"
      });

      test('Marks up unselected field as required', () => {
        validate(select, {
          required: 'Enter your example field',
        });

        expect(select.classList).toContain('coop-form__invalid');
        expect(error.textContent).toBe('Enter your example field');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up selected field (without value) as required', () => {
        select.options[0].selected = true;

        validate(select, {
          required: 'Enter your example field',
        });

        expect(select.classList).toContain('coop-form__invalid');
        expect(error.textContent).toBe('Enter your example field');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up selected field (with value) as valid', () => {
        select.options[1].selected = true;

        validate(select, {
          required: 'Enter your example field',
        });

        expect(select.classList).not.toContain('coop-form__invalid');
        expect(error.textContent).toBe('');
        expect(error.hasAttribute('hidden')).toBe(true);
      });
    });
  });

  describe('Group fields', () => {
    describe('Date inputs', () => {
      let fieldset;
      let error;
      let inputs;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/date-inputs.html');
        fieldset = document.querySelector('fieldset');
        error = document.getElementById('dob-1-error');
        inputs = document.querySelectorAll('[type="text"]');

        fieldMap = new Map([
          [inputs[0], {
            required: 'Enter your day of birth',
            invalid: 'Enter a valid day of birth',
          }],
          [inputs[1], {
            required: 'Enter your month of birth',
            invalid: 'Enter a valid month of birth',
          }],
          [inputs[2], {
            required: 'Enter your year of birth',
            invalid: 'Enter a valid year of birth',
          }],
        ]);
      });

      test('Marks up field group as required', () => {
        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows group "all empty" required message
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your date of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as required (empty day)', () => {
        inputs[0].value = '';
        inputs[1].value = '02';
        inputs[2].value = '2021';

        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows first error in group
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your day of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as required (empty month)', () => {
        inputs[0].value = '01';
        inputs[1].value = '';
        inputs[2].value = '2021';

        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows first error in group
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your month of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as required (empty year)', () => {
        inputs[0].value = '01';
        inputs[1].value = '02';
        inputs[2].value = '';

        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows first error in group
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your year of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as required (empty day/month)', () => {
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '2021';

        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows first error in group
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your day of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as required (empty month/year)', () => {
        inputs[0].value = '01';
        inputs[1].value = '';
        inputs[2].value = '';

        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows first error in group
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your month of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as required (empty day/month/year)', () => {
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows group "all empty" required message
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your date of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as invalid (invalid day/month/year)', () => {
        inputs[0].value = 'AA';
        inputs[1].value = 'BB';
        inputs[2].value = 'CC';

        validateGroup(fieldMap, fieldset, {
          required: 'Enter your date of birth',
          invalid: 'Enter a valid date of birth',
        });

        // Fieldset shows group "all invalid" required message
        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter a valid date of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });
    });

    describe('Checkboxes', () => {
      let fieldset;
      let error;
      let checkboxes;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/checkboxes-hint.html');
        fieldset = document.querySelector('fieldset');
        error = document.getElementById('checkbox-2-error');
        checkboxes = document.querySelectorAll('[type="checkbox"]');

        fieldMap = new Map(Array.from(checkboxes)
          .map((checkbox) => [checkbox]));
      });

      test('Marks up field group as required', () => {
        validateGroup(fieldMap, fieldset, {
          required: 'Select options owned by you',
        });

        expect(fieldset.getAttribute('aria-describedby')).toBe('checkbox-2-hint checkbox-2-error');
        expect(error.textContent).toBe('Select options owned by you');
        expect(error.hasAttribute('hidden')).toBe(false);
      });
    });

    describe('Radios', () => {
      let fieldset;
      let error;
      let radios;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/radios-hint.html');
        fieldset = document.querySelector('fieldset');
        error = document.getElementById('radio-2-error');
        radios = document.querySelectorAll('[type="radio"]');

        fieldMap = new Map(Array.from(radios)
          .map((checkbox) => [checkbox]));
      });

      test('Marks up field group as required', () => {
        validateGroup(fieldMap, fieldset, {
          required: 'Select type of delivery',
        });

        expect(fieldset.getAttribute('aria-describedby')).toBe('radio-2-hint radio-2-error');
        expect(error.textContent).toBe('Select type of delivery');
        expect(error.hasAttribute('hidden')).toBe(false);
      });
    });
  });
});
