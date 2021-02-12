/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { isGroupValid } from '../../../src/validation/fieldsets/helpers.mjs';

const { readFile } = fs.promises;

describe('Form fieldset helpers', () => {
  describe('Group fields', () => {
    describe('Date inputs', () => {
      let inputs;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/date-inputs.html');
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

    describe('Checkboxes', () => {
      let checkboxes;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/checkboxes.html');
        checkboxes = document.querySelectorAll('[type="checkbox"]');
        fieldMap = new Map(Array.from(checkboxes).map((checkbox) => [checkbox]));
      });

      test('Unticked checkbox is invalid', () => {
        checkboxes[1].checked = false;
        expect(isGroupValid(fieldMap)).toStrictEqual(false);
      });

      test('Ticked checkbox is valid', () => {
        checkboxes[1].checked = true;
        expect(isGroupValid(fieldMap)).toStrictEqual(true);
      });
    });

    describe('Radios', () => {
      let radios;
      let fieldMap;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/radios.html');
        radios = document.querySelectorAll('[type="radio"]');
        fieldMap = new Map(Array.from(radios).map((radio) => [radio]));
      });

      test('Unselected radio is invalid', () => {
        radios[1].checked = false;
        expect(isGroupValid(fieldMap)).toStrictEqual(false);
      });

      test('Selected radio is valid', () => {
        radios[1].checked = true;
        expect(isGroupValid(fieldMap)).toStrictEqual(true);
      });
    });
  });
});
