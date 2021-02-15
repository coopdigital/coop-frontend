/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { isGroupValid } from '../../../src/validation/fieldsets/helpers.mjs';

const { readFile } = fs.promises;

describe('Form fieldset helpers', () => {
  describe('Group fields', () => {
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
