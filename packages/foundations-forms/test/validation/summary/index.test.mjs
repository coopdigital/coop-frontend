/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import ValidationSummary from '../../../src/validation/summary/index.mjs';

const { readFile } = fs.promises;

describe('Form validation', () => {
  describe('Validation summary', () => {
    let container;
    let label;
    let input;

    // Example single error
    const errorSingle = 'Something went wrong';

    // Example multiple errors
    const errorsMultiple = [
      {
        id: 'example',
        message: 'Enter an example input',
      },
      {
        id: 'example-missing-1',
        message: 'Enter a missing input',
      },
      {
        id: 'example-missing-2',
        message: 'Enter a missing input',
      },
      {
        id: 'example-missing-2',
        messageHtml: 'Custom <a href="#">validation link</a> HTML',
      },
    ];

    beforeEach(async () => {
      if (!Element.prototype.scrollIntoView) {
        Element.prototype.scrollIntoView = jest.fn();
      }

      jest.spyOn(Element.prototype, 'scrollIntoView');
      jest.spyOn(HTMLInputElement.prototype, 'focus');

      const [summary, form] = await Promise.all([
        readFile('./packages/foundations-forms/test/fixtures/summary.html'),
        readFile('./packages/foundations-forms/test/fixtures/text.html'),
      ]);

      document.body.innerHTML = `
        ${summary}
        ${form}
      `;

      container = document.getElementById('validation-summary');
      label = document.querySelector('label');
      input = document.getElementById('example');

      jest.spyOn(container, 'addEventListener');
    });

    test('Prevents multiple instantiation', () => {
      const summary1 = new ValidationSummary(container.id);
      const summary2 = new ValidationSummary(container.id);
      const summary3 = new ValidationSummary(container.id);

      expect(summary2).toStrictEqual(summary1);
      expect(summary3).toStrictEqual(summary1);

      // Setup only runs once
      expect(container.addEventListener).toHaveBeenCalledTimes(1);
    });

    test('Renders with single error', () => {
      const summary = new ValidationSummary(container.id);

      // Set error
      summary.setError(errorSingle);

      expect(summary.container.outerHTML)
        .toMatchSnapshot();
    });

    test('Renders with multiple errors', () => {
      const summary = new ValidationSummary(container.id);

      // Set errors
      summary.setErrors(errorsMultiple);

      expect(summary.container.outerHTML)
        .toMatchSnapshot();
    });

    test('Error link click scrolls to label', () => {
      const summary = new ValidationSummary(container.id);

      // Set errors
      summary.setErrors(errorsMultiple);

      // Find first link, click
      document.querySelector('a[href="#example"]').click();
      expect(label.scrollIntoView).toHaveBeenCalled();
    });

    test('Error link click gives input focus', () => {
      const summary = new ValidationSummary(container.id);

      // Set errors
      summary.setErrors(errorsMultiple);

      // Find first link, click
      document.querySelector('a[href="#example"]').click();
      expect(input.focus).toHaveBeenCalledWith({
        preventScroll: true,
      });
    });
  });
});
