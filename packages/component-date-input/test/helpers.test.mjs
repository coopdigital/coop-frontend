/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { isGroupValid } from '@coopdigital/foundations-forms/src/validation/fieldsets/helpers.mjs';

const { readFile } = fs.promises;

describe('Date inputs', () => {
  describe('Form fieldset helpers', () => {
    let inputs;
    let fieldMap;

    beforeEach(async () => {
      document.body.innerHTML = await readFile(
        './packages/component-date-input/src/html/date-inputs.html'
      );
      inputs = document.querySelectorAll('[type="text"]');
      fieldMap = new Map(Array.from(inputs).map((input) => [input]));
    });

    test('Empty fields (day) are invalid', () => {
      inputs[0].value = '';
      inputs[1].value = '02';
      inputs[2].value = '2021';
      expect(isGroupValid(fieldMap)).toStrictEqual(false);
    });

    test('Empty fields (month) are invalid', () => {
      inputs[0].value = '01';
      inputs[1].value = '';
      inputs[2].value = '2021';
      expect(isGroupValid(fieldMap)).toStrictEqual(false);
    });

    test('Empty fields (year) are invalid', () => {
      inputs[0].value = '01';
      inputs[1].value = '02';
      inputs[2].value = '';
      expect(isGroupValid(fieldMap)).toStrictEqual(false);
    });

    test('Empty fields (day/month) are invalid', () => {
      inputs[0].value = '';
      inputs[1].value = '';
      inputs[2].value = '2021';
      expect(isGroupValid(fieldMap)).toStrictEqual(false);
    });

    test('Empty fields (month/year) are invalid', () => {
      inputs[0].value = '01';
      inputs[1].value = '';
      inputs[2].value = '';
      expect(isGroupValid(fieldMap)).toStrictEqual(false);
    });

    test('Empty fields (day/month/year) are invalid', () => {
      inputs[0].value = '';
      inputs[1].value = '';
      inputs[2].value = '';
      expect(isGroupValid(fieldMap)).toStrictEqual(false);
    });

    test('Fields with values are valid', () => {
      inputs[0].value = '01';
      inputs[1].value = '02';
      inputs[2].value = '2021';
      expect(isGroupValid(fieldMap)).toStrictEqual(true);
    });
  });
});
