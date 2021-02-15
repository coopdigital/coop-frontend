/**
 * @jest-environment jsdom
 */

import fs from 'fs';

import {
  getLabel,
  getLabelOrLegend,
} from '../../../src/validation/fields/helpers.mjs';

import {
  setGroupInvalid,
  setGroupValid,
} from '../../../src/validation/fieldsets/validation.mjs';

const { readFile } = fs.promises;

describe('Form fieldset validation', () => {
  describe('Group fields', () => {
    describe('Checkboxes', () => {
      let fieldset;
      let legend;
      let error;
      let label;
      let checkboxes;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/checkboxes-hint.html');
        fieldset = document.querySelector('fieldset');
        legend = document.querySelector('legend');
        error = document.getElementById('checkbox-2-error');
        label = document.querySelector('[for="checkbox-2-1"]');
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
          expect(fieldset.getAttribute('aria-describedby')).toBe('checkbox-2-hint checkbox-2-error');
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

          expect(fieldset.getAttribute('aria-describedby')).toBe('checkbox-2-hint');
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
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/radios-hint.html');
        fieldset = document.querySelector('fieldset');
        legend = document.querySelector('legend');
        error = document.getElementById('radio-2-error');
        label = document.querySelector('[for="radio-2-1"]');
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
          expect(fieldset.getAttribute('aria-describedby')).toBe('radio-2-hint radio-2-error');
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

          expect(fieldset.getAttribute('aria-describedby')).toBe('radio-2-hint');
        });
      });
    });
  });
});
