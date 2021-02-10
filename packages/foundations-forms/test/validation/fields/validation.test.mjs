/**
 * @jest-environment jsdom
 */

import fs from 'fs';

import {
  setInvalid,
  setValid,
} from '../../../src/validation/fields/validation.mjs';

import {
  getLabel,
  getLabelOrLegend,
} from '../../../src/validation/fields/helpers.mjs';

const { readFile } = fs.promises;

describe('Form field validation', () => {
  describe('Single fields', () => {
    describe('Text input', () => {
      let label;
      let error;
      let input;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/text.html');
        label = document.querySelector('[for=example]');
        error = document.getElementById('example-error');
        input = document.getElementById('example');
      });

      describe('Defaults', () => {
        test('Field has a label', () => {
          expect(getLabel(input)).toStrictEqual(label);
        });

        test('Field is best labelled by a label', () => {
          expect(getLabelOrLegend(input)).toStrictEqual(label);
        });

        test('Field error message is hidden', () => {
          expect(error.hasAttribute('hidden')).toBe(true);
        });

        test('Field is not described by the error', () => {
          expect(input.hasAttribute('aria-describedby')).toBe(false);
        });
      });

      describe('Error messages', () => {
        beforeEach(() => input.setCustomValidity('Enter your example field'));

        test('Field is marked as invalid', () => {
          setInvalid(input);

          expect(input.classList).toContain('coop-form__invalid');
          expect(error.textContent).toBe('Enter your example field');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Field is described by the error', () => {
          setInvalid(input);
          expect(input.getAttribute('aria-describedby')).toBe('example-error');
        });

        test('Field is marked as valid', () => {
          setInvalid(input);
          setValid(input);

          expect(input.classList).not.toContain('coop-form__invalid');
          expect(error.textContent).toBe('');
          expect(error.hasAttribute('hidden')).toBe(true);
        });

        test('Field is no longer described by the error', () => {
          setInvalid(input);
          setValid(input);

          expect(error.hasAttribute('aria-describedby')).toBe(false);
        });
      });
    });

    describe('Select', () => {
      let label;
      let error;
      let select;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/selects.html');
        label = document.querySelector('[for=example]');
        error = document.getElementById('example-error');
        select = document.getElementById('example');
      });

      describe('Defaults', () => {
        test('Field has a label', () => {
          expect(getLabel(select)).toStrictEqual(label);
        });

        test('Field is best labelled by a label', () => {
          expect(getLabelOrLegend(select)).toStrictEqual(label);
        });

        test('Field error message is hidden', () => {
          expect(error.hasAttribute('hidden')).toBe(true);
        });

        test('Field is not described by the error', () => {
          expect(select.hasAttribute('aria-describedby')).toBe(false);
        });
      });

      describe('Error messages', () => {
        beforeEach(() => select.setCustomValidity('Enter your example field'));

        test('Field is marked as invalid', () => {
          setInvalid(select);
          expect(select.classList).toContain('coop-form__invalid');
          expect(error.textContent).toBe('Enter your example field');
          expect(error.hasAttribute('hidden')).toBe(false);
        });

        test('Field is described by the error', () => {
          setInvalid(select);
          expect(select.getAttribute('aria-describedby')).toBe('example-error');
        });

        test('Field is marked as valid', () => {
          setInvalid(select);
          setValid(select);

          expect(select.classList).not.toContain('coop-form__invalid');
          expect(error.textContent).toBe('');
          expect(error.hasAttribute('hidden')).toBe(true);
        });

        test('Field is no longer described by the error', () => {
          setInvalid(select);
          setValid(select);

          expect(error.hasAttribute('aria-describedby')).toBe(false);
        });
      });
    });
  });
});
