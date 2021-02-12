/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { focusTarget } from '../../../src/validation/utils/focus.mjs';

const { readFile } = fs.promises;

describe('Form utilities, focus', () => {
  describe('Group fields', () => {
    let legend;
    let checkbox;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/checkboxes.html');
      legend = document.querySelector('legend');
      checkbox = document.querySelector('[type="checkbox"]');

      legend.scrollIntoView = jest.fn();
      checkbox.focus = jest.fn();
    });

    test('Focus checkbox (without scrolling)', () => {
      focusTarget(checkbox);
      expect(checkbox.focus).toHaveBeenCalledWith({
        preventScroll: true,
      });
    });

    test('Scroll to legend', () => {
      focusTarget(checkbox);
      expect(legend.scrollIntoView).toHaveBeenCalled();
    });
  });

  describe('Single fields', () => {
    let label;
    let input;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-forms/src/examples/text.html');
      label = document.querySelector('[for=full-name-1]');
      input = document.getElementById('full-name-1');

      label.scrollIntoView = jest.fn();
      input.focus = jest.fn();
    });

    test('Focus text input (without scrolling)', () => {
      focusTarget(input);
      expect(input.focus).toHaveBeenCalledWith({
        preventScroll: true,
      });
    });

    test('Scroll to label', () => {
      focusTarget(input);
      expect(label.scrollIntoView).toHaveBeenCalled();
    });
  });
});
