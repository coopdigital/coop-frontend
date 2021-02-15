/**
 * @jest-environment jsdom
 */

import fs from 'fs';

import {
  setInvalid,
  setGroupInvalid,
  setGroupValid,
  validateGroup,
} from '@coopdigital/foundations-forms/src/validation/index.mjs';

const { readFile } = fs.promises;

describe('Date inputs', () => {
  describe('Form validation (automatic)', () => {
    let fieldset;
    let error;
    let inputs;
    let fieldMap;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/component-date-input/src/examples/date-inputs.html');
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

  describe('Form validation', () => {
    let fieldset;
    let error;
    let inputs;
    let fieldMap;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/component-date-input/src/examples/date-inputs.html');
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

    describe('Error messages', () => {
      test('Fieldset is marked as invalid (empty day)', () => {
        inputs[0].value = '';
        inputs[1].value = '02';
        inputs[2].value = '2021';

        inputs[0].setCustomValidity('Enter your day of birth');
        setGroupInvalid(fieldMap, fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your day of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Fieldset is marked as invalid (empty month)', () => {
        inputs[0].value = '01';
        inputs[1].value = '';
        inputs[2].value = '2021';

        inputs[1].setCustomValidity('Enter your month of birth');
        setGroupInvalid(fieldMap, fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your month of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Fieldset is marked as invalid (empty year)', () => {
        inputs[0].value = '01';
        inputs[1].value = '02';
        inputs[2].value = '';

        inputs[2].setCustomValidity('Enter your year of birth');
        setGroupInvalid(fieldMap, fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your year of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Fieldset is marked as invalid (empty day/month)', () => {
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '2021';

        inputs[0].setCustomValidity('Enter your day and month of birth');
        inputs[1].setCustomValidity('Enter your day and month of birth');
        setGroupInvalid(fieldMap, fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your day and month of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Fieldset is marked as invalid (empty month/year)', () => {
        inputs[0].value = '01';
        inputs[1].value = '';
        inputs[2].value = '';

        inputs[1].setCustomValidity('Enter your day and month of birth');
        inputs[2].setCustomValidity('Enter your day and month of birth');
        setGroupInvalid(fieldMap, fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your day and month of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Fieldset is marked as invalid (empty day/month/year)', () => {
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        inputs[0].setCustomValidity('Enter your date of birth');
        inputs[1].setCustomValidity('Enter your date of birth');
        inputs[2].setCustomValidity('Enter your date of birth');
        setGroupInvalid(fieldMap, fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your date of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Fieldset is marked as invalid when single field is marked as invalid', () => {
        inputs[0].value = '01';
        inputs[1].value = '02';
        inputs[2].value = '';

        inputs[2].setCustomValidity('Enter your year of birth');
        setInvalid(inputs[2], fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint dob-1-error');
        expect(error.textContent).toBe('Enter your year of birth');
        expect(error.hasAttribute('hidden')).toBe(false);
      });

      test('Fieldset is marked as valid', () => {
        inputs[0].value = '01';
        inputs[1].value = '02';
        inputs[2].value = '2021';

        setGroupInvalid(fieldMap, fieldset);
        setGroupValid(fieldMap, fieldset);

        expect(fieldset.getAttribute('aria-describedby')).toBe('dob-1-hint');
        expect(error.textContent).toBe('');
        expect(error.hasAttribute('hidden')).toBe(true);
      });
    });
  });
});
