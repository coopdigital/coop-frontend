/* eslint-disable import/prefer-default-export */

import { isValid } from '../fields/validation.mjs';
import { hasChecked, isCheckboxes } from '../../checkboxes.mjs';
import { hasSelected, isRadios } from '../../radios.mjs';

/**
 * Check fieldset fields are valid
 */
export const isGroupValid = (fields) => {
  // Only one checkbox is required
  if (isCheckboxes(fields)) {
    return hasChecked(fields);
  }

  // Only one radio is required
  if (isRadios(fields)) {
    return hasSelected(fields);
  }

  // For others, every field is required
  return Array.from(fields)
    .every(isValid);
};
