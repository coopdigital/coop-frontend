/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import { loading, reset } from '../src/buttons.mjs';

const { readFile } = fs.promises;

describe('Form elements', () => {
  describe('Buttons', () => {
    let buttonDefault;
    let buttonAnnounce;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-buttons/test/fixtures/buttons.html');
      buttonDefault = document.getElementById('button-default');
      buttonAnnounce = document.getElementById('button-announce');
    });

    describe('Defaults', () => {
      test('Shows default text', () => {
        const { textContent } = buttonDefault;
        expect(textContent).toEqual('Submit');
      });

      test('Shows default text (announcement)', () => {
        const { textContent } = buttonAnnounce.querySelector('.coop-btn__text:not([hidden])');
        expect(textContent).toEqual('Submit');
      });
    });

    describe('Loading', () => {
      test('Adds spinner', async () => {
        await Promise.all([
          loading(buttonDefault),
          loading(buttonAnnounce),
        ]);

        expect(buttonDefault.classList).toContain('coop-btn--loading');
        expect(buttonAnnounce.classList).toContain('coop-btn--loading');
      });

      test('Shows default text (default)', async () => {
        await loading(buttonDefault);

        const { textContent } = buttonDefault;
        expect(textContent).toEqual('Submit');
      });

      test('Shows loading text (announcement)', async () => {
        await loading(buttonAnnounce);

        const { textContent } = buttonAnnounce.querySelector('.coop-btn__text:not([hidden])');
        expect(textContent).toEqual('Loading…');
      });

      test('Adds ARIA attributes to suppress future default text', async () => {
        // Loading text swap announced
        expect(buttonAnnounce.getAttribute('aria-live')).toEqual('assertive');
        expect(buttonAnnounce.getAttribute('aria-atomic')).toEqual('true');

        // Wait for ARIA changes
        await loading(buttonAnnounce);

        // Next announcement suppressed
        expect(buttonAnnounce.getAttribute('aria-live')).toEqual('off');
        expect(buttonAnnounce.getAttribute('aria-atomic')).toEqual('false');
      });
    });

    describe('Reset', () => {
      beforeEach(() => Promise.all([
        loading(buttonDefault),
        loading(buttonAnnounce),
      ]));

      test('Removes spinner', async () => {
        await Promise.all([
          reset(buttonDefault),
          reset(buttonAnnounce),
        ]);

        expect(buttonDefault.classList).not.toContain('coop-btn--loading');
        expect(buttonAnnounce.classList).not.toContain('coop-btn--loading');
      });

      test('Shows default text (default)', async () => {
        await reset(buttonDefault);

        const { textContent } = buttonDefault;
        expect(textContent).toEqual('Submit');
      });

      test('Shows default text (announcement)', async () => {
        await reset(buttonAnnounce);

        const { textContent } = buttonAnnounce.querySelector('.coop-btn__text:not([hidden])');
        expect(textContent).toEqual('Submit');
      });

      test('Adds ARIA attributes to announce future loading text', async () => {
        // Default text swap not announced
        expect(buttonAnnounce.getAttribute('aria-live')).toEqual('off');
        expect(buttonAnnounce.getAttribute('aria-atomic')).toEqual('false');

        // Wait for ARIA changes
        await reset(buttonAnnounce);

        // Next announcement not longer suppressed
        expect(buttonAnnounce.getAttribute('aria-live')).toEqual('assertive');
        expect(buttonAnnounce.getAttribute('aria-atomic')).toEqual('true');
      });
    });
  });
});
