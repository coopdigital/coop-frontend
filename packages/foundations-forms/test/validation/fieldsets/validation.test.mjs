/**
 * @jest-environment jsdom
 */

import fs from 'fs';

import {
  getLabel,
  getLabelOrLegend,
} from '../../../src/validation/fields/helpers.mjs';

import {
  setInvalid,
} from '../../../src/validation/fields/validation.mjs';

import {
  setGroupInvalid,
  setGroupValid,
} from '../../../src/validation/fieldsets/validation.mjs';

const { readFile } = fs.promises;

describe('Form fieldset validation', () => {
  describe('Group fields', () => {
    describe('Date inputs', () => {
      let fieldset;
      let error;
      let inputs;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/date-inputs.html');
        fieldset = document.querySelector('fieldset');
        error = document.getElementById('dob-error');
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

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
          expect(error.textContent).toBe('Enter your day of birth');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Fieldset is marked as invalid (empty month)', () => {
          inputs[0].value = '01';
          inputs[1].value = '';
          inputs[2].value = '2021';

          inputs[1].setCustomValidity('Enter your month of birth');
          setGroupInvalid(fieldMap, fieldset);

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
          expect(error.textContent).toBe('Enter your month of birth');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Fieldset is marked as invalid (empty year)', () => {
          inputs[0].value = '01';
          inputs[1].value = '02';
          inputs[2].value = '';

          inputs[2].setCustomValidity('Enter your year of birth');
          setGroupInvalid(fieldMap, fieldset);

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
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

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
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

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
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

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
          expect(error.textContent).toBe('Enter your date of birth');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Fieldset is marked as invalid when single field is marked as invalid', () => {
          inputs[0].value = '01';
          inputs[1].value = '02';
          inputs[2].value = '';

          inputs[2].setCustomValidity('Enter your year of birth');
          setInvalid(inputs[2], fieldset);

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint dob-error');
          expect(error.textContent).toBe('Enter your year of birth');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Fieldset is marked as valid', () => {
          inputs[0].value = '01';
          inputs[1].value = '02';
          inputs[2].value = '2021';

          setGroupInvalid(fieldMap, fieldset);
          setGroupValid(fieldMap, fieldset);

          expect(fieldset.getAttribute('aria-describedby')).toBe('dob-hint');
          expect(error.textContent).toBe('');
          expect(error.hasAttribute('hidden')).toBe(true);
        });
      });
    });

    describe('Checkboxes', () => {
      let fieldset;
      let legend;
      let error;
      let label;
      let checkboxes;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/checkboxes.html');
        fieldset = document.querySelector('fieldset');
        legend = document.querySelector('legend');
        error = document.getElementById('checkbox-error');
        label = document.querySelector('[for="checkbox-1"]');
        checkboxes = document.querySelectorAll('[type="checkbox"]');

        fieldMap = new Map(Array.from(checkboxes)
          .map((checkbox) => [checkbox]));
      });

      describe('Defaults', () => {
        test('Checkbox has a label', () => {
          expect(getLabel(checkboxes[0])).toStrictEqual(label);
        });

        test('Checkbox is best labelled by a legend', () => {
          expect(getLabelOrLegend(checkboxes[0])).toStrictEqual(legend);
        });
      });

      describe('Error messages', () => {
        beforeEach(() => checkboxes[0].setCustomValidity('Select options owned by you'));

        test('Fieldset is marked as invalid', () => {
          setGroupInvalid(fieldMap, fieldset);

          expect(error.textContent).toBe('Select options owned by you');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Fieldset is described by the error', () => {
          setGroupInvalid(fieldMap, fieldset);
          expect(fieldset.getAttribute('aria-describedby')).toBe('checkbox-hint checkbox-error');
        });

        test('Fieldset is marked as valid', () => {
          setGroupInvalid(fieldMap, fieldset);
          setGroupValid(fieldMap, fieldset);

          expect(error.textContent).toBe('');
          expect(error.hasAttribute('hidden')).toBe(true);
        });

        test('Fieldset is no longer described by the error', () => {
          setGroupInvalid(fieldMap, fieldset);
          setGroupValid(fieldMap, fieldset);

          expect(fieldset.getAttribute('aria-describedby')).toBe('checkbox-hint');
        });
      });
    });

    describe('Radios', () => {
      let fieldset;
      let legend;
      let error;
      let label;
      let radios;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/radios.html');
        fieldset = document.querySelector('fieldset');
        legend = document.querySelector('legend');
        error = document.getElementById('radio-error');
        label = document.querySelector('[for="radio-1"]');
        radios = document.querySelectorAll('[type="radio"]');

        fieldMap = new Map(Array.from(radios)
          .map((radio) => [radio]));
      });

      describe('Defaults', () => {
        test('Radio has a label', () => {
          expect(getLabel(radios[0])).toStrictEqual(label);
        });

        test('Radio is best labelled by a legend', () => {
          expect(getLabelOrLegend(radios[0])).toStrictEqual(legend);
        });
      });

      describe('Error messages', () => {
        beforeEach(() => radios[0].setCustomValidity('Select type of delivery'));

        test('Fieldset is marked as invalid', () => {
          setGroupInvalid(fieldMap, fieldset);

          expect(error.textContent).toBe('Select type of delivery');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Fieldset is described by the error', () => {
          setGroupInvalid(fieldMap, fieldset);
          expect(fieldset.getAttribute('aria-describedby')).toBe('radio-hint radio-error');
        });

        test('Fieldset is marked as valid', () => {
          setGroupInvalid(fieldMap, fieldset);
          setGroupValid(fieldMap, fieldset);

          expect(error.textContent).toBe('');
          expect(error.hasAttribute('hidden')).toBe(true);
        });

        test('Fieldset is no longer described by the error', () => {
          setGroupInvalid(fieldMap, fieldset);
          setGroupValid(fieldMap, fieldset);

          expect(fieldset.getAttribute('aria-describedby')).toBe('radio-hint');
        });
      });
    });
  });
});
