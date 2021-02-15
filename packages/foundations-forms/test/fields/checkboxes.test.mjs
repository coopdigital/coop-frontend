/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import {
  getChecked,
  getCheckedValues,
  hasChecked,
  isCheckbox,
  isCheckboxes,
} from '../../src/fields/checkboxes.mjs';

const { readFile } = fs.promises;

describe('Form elements', () => {
  describe('Checkboxes', () => {
    let checkboxes;
    let checkbox;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/checkboxes.html');
      checkboxes = document.querySelectorAll('[type=checkbox]');
      checkbox = document.querySelector('[type=checkbox]');
    });

    describe('Detection', () => {
      test('Checkbox (NodeList) passes isCheckboxes() check', () => {
        expect(isCheckboxes(checkboxes)).toStrictEqual(true);
      });

      test('Checkbox (Array) passes isCheckboxes() check', () => {
        expect(isCheckboxes(Array.from(checkboxes))).toStrictEqual(true);
      });

      test('Checkbox passes isCheckbox() check', () => {
        expect(isCheckbox(checkbox)).toStrictEqual(true);
      });

      test('Other fields fail isCheckbox() check', () => {
        const inputText = document.createElement('input');
        const inputRadio = document.createElement('input');

        inputText.setAttribute('type', 'text');
        inputRadio.setAttribute('type', 'radio');

        const select = document.createElement('select');
        const textarea = document.createElement('textarea');
        const button = document.createElement('button');

        expect(isCheckbox(inputText)).toStrictEqual(false);
        expect(isCheckbox(inputRadio)).toStrictEqual(false);
        expect(isCheckbox(select)).toStrictEqual(false);
        expect(isCheckbox(textarea)).toStrictEqual(false);
        expect(isCheckbox(button)).toStrictEqual(false);
      });
    });

    describe('Filtering', () => {
      test('Unticked checkboxes fail check', () => {
        expect(hasChecked(checkboxes)).toStrictEqual(false);
      });

      test('Ticked checkbox passes check', () => {
        checkbox.checked = true;
        expect(hasChecked(checkboxes)).toStrictEqual(true);
      });

      test('Ticked checkboxes pass check', () => {
        checkboxes[0].checked = true;
        checkboxes[1].checked = true;
        expect(hasChecked(checkboxes)).toStrictEqual(true);
      });

      test('Unticked checkboxes return no field', () => {
        expect(getChecked(checkboxes)).toStrictEqual(undefined);
      });

      test('Ticked checkbox returns array of one field', () => {
        checkbox.checked = true;
        expect(getChecked(checkboxes)).toStrictEqual([checkbox]);
      });

      test('Ticked checkboxes return array of multiple fields', () => {
        checkboxes[0].checked = true;
        checkboxes[1].checked = true;

        expect(getChecked(checkboxes)).toStrictEqual([
          checkboxes[0],
          checkboxes[1],
        ]);
      });
    });

    describe('Values', () => {
      test('Unticked checkboxes return empty array', () => {
        expect(getCheckedValues(checkboxes)).toStrictEqual([]);
      });

      test('Ticked checkbox returns array of one value', () => {
        checkbox.checked = true;
        expect(getCheckedValues(checkboxes)).toStrictEqual(['1']);
      });

      test('Ticked checkboxes return array of multiple values', () => {
        checkboxes[0].checked = true;
        checkboxes[1].checked = true;

        expect(getCheckedValues(checkboxes)).toStrictEqual(['1', '2']);
      });
    });
  });
});
