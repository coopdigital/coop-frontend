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
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/text.html');
        error = document.getElementById('example-error');
        input = document.getElementById('example');
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

    describe('Select', () => {
      let error;
      let select;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/selects.html');
        error = document.getElementById('example-error');
        select = document.getElementById('example');
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

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/date-inputs.html');
        fieldset = document.querySelector('fieldset');
        error = document.getElementById('dob-error');
        inputs = document.querySelectorAll('[type="text"]');
      });

      test('Marks up field group as required', () => {
        validateGroup(inputs, fieldset, {
          required: 'Enter your date of birth',
        });

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
        expect(error.textContent).toBe('Enter your date of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Marks up field group as required (empty day)', () => {
        inputs[0].value = '';
        inputs[1].value = '02';
        inputs[2].value = '2021';

        validateGroup(inputs, fieldset, {
          required: 'Enter your date of birth',
        });

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
        expect(error.textContent).toBe('Enter your date of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });
    });

    describe('Checkboxes', () => {
      let fieldset;
      let error;
      let checkboxes;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/checkboxes.html');
        fieldset = document.querySelector('fieldset');
        error = document.getElementById('checkbox-error');
        checkboxes = document.querySelectorAll('[type="checkbox"]');
      });

      test('Marks up field group as required', () => {
        validateGroup(checkboxes, fieldset, {
          required: 'Select options owned by you',
        });

        expect(fieldset.getAttribute('aria-describedby')).toBe('checkbox-hint checkbox-error');
        expect(error.textContent).toBe('Select options owned by you');
        expect(error.hasAttribute('hidden')).toBe(false);
      });
    });

    describe('Radios', () => {
      let fieldset;
      let error;
      let radios;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/radios.html');
        fieldset = document.querySelector('fieldset');
        error = document.getElementById('radio-error');
        radios = document.querySelectorAll('[type="radio"]');
      });

      test('Marks up field group as required', () => {
        validateGroup(radios, fieldset, {
          required: 'Select type of delivery',
        });

        expect(fieldset.getAttribute('aria-describedby')).toBe('radio-hint radio-error');
        expect(error.textContent).toBe('Select type of delivery');
        expect(error.hasAttribute('hidden')).toBe(false);
      });
    });
  });
});
