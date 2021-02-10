/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { getValue, setValue } from '../src/validation/fields/helpers.mjs';

const { readFile } = fs.promises;

describe('Form elements', () => {
  describe('Text input', () => {
    let input;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/text.html');
      input = document.getElementById('example');
    });

    describe('Values', () => {
      test('Field with initial value', () => {
        expect(getValue(input)).toBe('');
      });

      test('Field with new value', () => {
        setValue(input, 'Hello world');
        expect(getValue(input)).toBe('Hello world');
      });
    });
  });
});
