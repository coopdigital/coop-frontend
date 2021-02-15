/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { getValue, setValue } from '../../src/validation/fields/helpers.mjs';
import { isSelect } from '../../src/fields/selects.mjs';

const { readFile } = fs.promises;

describe('Form elements', () => {
  describe('Select', () => {
    let select;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/selects.html');
      select = document.getElementById('sort-by-1');
    });

    describe('Detection', () => {
      test('Select field passes isSelect() check', () => {
        expect(isSelect(select)).toStrictEqual(true);
      });

      test('Other fields fail isSelect() check', () => {
        const inputText = document.createElement('input');
        const inputRadio = document.createElement('input');
        const inputCheckbox = document.createElement('input');

        inputText.setAttribute('type', 'text');
        inputRadio.setAttribute('type', 'radio');
        inputCheckbox.setAttribute('type', 'checkbox');

        const textarea = document.createElement('textarea');
        const button = document.createElement('button');

        expect(isSelect(inputText)).toStrictEqual(false);
        expect(isSelect(inputRadio)).toStrictEqual(false);
        expect(isSelect(inputCheckbox)).toStrictEqual(false);
        expect(isSelect(textarea)).toStrictEqual(false);
        expect(isSelect(button)).toStrictEqual(false);
      });
    });

    describe('Values', () => {
      test('Field with initial option selected', () => {
        // "Relevancy"
        expect(select.selectedIndex).toBe(1);
        expect(getValue(select)).toBe('relevancy');
      });

      test('Field with first option selected', () => {
        setValue(select, ''); // "Please select"
        expect(select.selectedIndex).toBe(0);
        expect(getValue(select)).toBe('');
      });

      test('Field with second option selected', () => {
        setValue(select, 'price-desc'); // "Price: High to low<"
        expect(select.selectedIndex).toBe(3);
        expect(getValue(select)).toBe('price-desc');
      });
    });
  });
});
