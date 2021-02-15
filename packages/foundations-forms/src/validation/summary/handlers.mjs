/* eslint-disable import/prefer-default-export */

import { focusTarget } from '../utils/focus.mjs';

/**
 * Validation summary link click
 */
export const click = (event) => {
  if (event.target.classList.contains('coop-c-message__link')) {
    const fieldId = event.target.getAttribute('href');
    const field = document.querySelector(fieldId);

    if (field) {
      event.preventDefault();

      // Scroll to field, focus
      focusTarget(field);

      // Click into field (not automatic in Firefox/Safari)
      if (field.matches('input:not([type=radio]):not([type=checkbox]), textarea')) {
        field.click();
      }
    }
  }
};
