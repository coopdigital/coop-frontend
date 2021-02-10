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

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/date-inputs.html');
        inputs = document.querySelectorAll('[type="text"]');
      });

      test('Empty fields (day) are invalid', () => {
        inputs[0].value = '';
        inputs[1].value = '02';
        inputs[2].value = '2021';
        expect(isGroupValid(inputs)).toStrictEqual(false);
      });

      test('Empty fields (month) are invalid', () => {
        inputs[0].value = '01';
        inputs[1].value = '';
        inputs[2].value = '2021';
        expect(isGroupValid(inputs)).toStrictEqual(false);
      });

      test('Empty fields (year) are invalid', () => {
        inputs[0].value = '01';
        inputs[1].value = '02';
        inputs[2].value = '';
        expect(isGroupValid(inputs)).toStrictEqual(false);
      });

      test('Empty fields (day/month) are invalid', () => {
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '2021';
        expect(isGroupValid(inputs)).toStrictEqual(false);
      });

      test('Empty fields (month/year) are invalid', () => {
        inputs[0].value = '01';
        inputs[1].value = '';
        inputs[2].value = '';
        expect(isGroupValid(inputs)).toStrictEqual(false);
      });

      test('Empty fields (day/month/year) are invalid', () => {
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';
        expect(isGroupValid(inputs)).toStrictEqual(false);
      });

      test('Fields with values are valid', () => {
        inputs[0].value = '01';
        inputs[1].value = '02';
        inputs[2].value = '2021';
        expect(isGroupValid(inputs)).toStrictEqual(true);
      });
    });

    describe('Checkboxes', () => {
      let checkboxes;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/checkboxes.html');
        checkboxes = document.querySelectorAll('[type="checkbox"]');
      });

      test('Unticked checkbox is invalid', () => {
        checkboxes[1].checked = false;
        expect(isGroupValid(checkboxes)).toStrictEqual(false);
      });

      test('Ticked checkbox is valid', () => {
        checkboxes[1].checked = true;
        expect(isGroupValid(checkboxes)).toStrictEqual(true);
      });
    });

    describe('Radios', () => {
      let radios;

      beforeEach(async () => {
        document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/radios.html');
        radios = document.querySelectorAll('[type="radio"]');
      });

      test('Unselected radio is invalid', () => {
        radios[1].checked = false;
        expect(isGroupValid(radios)).toStrictEqual(false);
      });

      test('Selected radio is valid', () => {
        radios[1].checked = true;
        expect(isGroupValid(radios)).toStrictEqual(true);
      });
    });
  });
});
