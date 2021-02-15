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
