/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import {
  getSelected,
  getSelectedValue,
  hasSelected,
  isRadio,
  isRadios,
} from '../../src/fields/radios.mjs';

const { readFile } = fs.promises;

describe('Form elements', () => {
  describe('Radios', () => {
    let radios;
    let radio;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/radios.html');
      radios = document.querySelectorAll('[type=radio]');
      radio = document.querySelector('[type=radio]');
    });

    describe('Detection', () => {
      test('Radio button (NodeList) passes isRadios() check', () => {
        expect(isRadios(radios)).toStrictEqual(true);
      });

      test('Radio button (Array) passes isRadios() check', () => {
        expect(isRadios(Array.from(radios))).toStrictEqual(true);
      });

      test('Radio button passes isRadio() check', () => {
        expect(isRadio(radio)).toStrictEqual(true);
      });

      test('Other fields fail isRadio() check', () => {
        const inputText = document.createElement('input');
        const inputCheckbox = document.createElement('input');

        inputText.setAttribute('type', 'text');
        inputCheckbox.setAttribute('type', 'checkbox');

        const select = document.createElement('select');
        const textarea = document.createElement('textarea');
        const button = document.createElement('button');

        expect(isRadio(inputText)).toStrictEqual(false);
        expect(isRadio(inputCheckbox)).toStrictEqual(false);
        expect(isRadio(select)).toStrictEqual(false);
        expect(isRadio(textarea)).toStrictEqual(false);
        expect(isRadio(button)).toStrictEqual(false);
      });
    });

    describe('Filtering', () => {
      test('Unselected radios fails check', () => {
        expect(hasSelected(radios)).toStrictEqual(false);
      });

      test('Selected radios pass check', () => {
        radio.checked = true;
        expect(hasSelected(radios)).toStrictEqual(true);
      });

      test('Unselected radios return no field', () => {
        expect(getSelected(radios)).toStrictEqual(undefined);
      });

      test('Selected radios return field', () => {
        radio.checked = true;
        expect(getSelected(radios)).toStrictEqual(radio);
      });
    });

    describe('Values', () => {
      test('Unselected radios return no value', () => {
        expect(getSelectedValue(radios)).toStrictEqual(undefined);
      });

      test('Selected radios return value', () => {
        radio.checked = true;
        expect(getSelectedValue(radios)).toStrictEqual('1');
      });
    });
  });
});
