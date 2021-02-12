/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { isValid } from '../../../src/validation/fields/validation.mjs';

const { readFile } = fs.promises;

describe('Form field helpers', () => {
  describe('Single fields', () => {
    describe('Text input', () => {
      let input;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/text.html');
        input = document.getElementById('full-name-1');
      });

      test('Field with empty value is invalid', () => {
        input.value = '';
        expect(isValid(input)).toStrictEqual(false);
      });

      test('Field with value is valid', () => {
        input.value = 'Hello world';
        expect(isValid(input)).toStrictEqual(true);
      });

      test('Field with matching value is valid', () => {
        input.pattern = '[A-Za-z ]*';
        input.value = 'Hello world';
        expect(isValid(input)).toStrictEqual(true);
      });

      test('Field with non-matching value is invalid', () => {
        input.pattern = '[0-9]*';
        input.value = 'Hello world';
        expect(isValid(input)).toStrictEqual(false);
      });
    });

    describe('Select', () => {
      let select;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/selects.html');
        select = document.getElementById('sort-by-1');
      });

      test('Field with empty value is invalid', () => {
        select.selectedIndex = 0; // "Please select"
        expect(isValid(select)).toStrictEqual(false);
      });

      test('Field with value is valid', () => {
        select.selectedIndex = 1; // "Relevancy"
        expect(isValid(select)).toStrictEqual(true);
      });
    });
  });
});
