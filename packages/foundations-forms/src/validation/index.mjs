import { isGroupValid } from './fieldsets/helpers.mjs';
import { isCheckboxes } from '../checkboxes.mjs';
import { isRadios } from '../radios.mjs';

import {
  getValue,
  isValid,
  setInvalid,
  setValid,
} from './fields/index.mjs';

import {
  setGroupInvalid,
  setGroupValid,
} from './fieldsets/index.mjs';

/**
 * Validate form field
 * Automatically mark up as valid/invalid
 */
export const validate = (field, { invalid, required } = {}, fieldset) => {
  setValid(field);

  // Field is empty
  if (!field.disabled && !getValue(field)) {
    field.setCustomValidity(required);

  // Field is invalid (via [pattern])
  } else if (!field.disabled && !isValid(field)) {
    field.setCustomValidity(invalid || required);
  }

  // Field failed validation
  if (field.validity.customError) {
    setInvalid(field, fieldset);
  }
};

/**
 * Validate form fieldset group
 * Automatically mark up as valid/invalid
 */
export const validateGroup = (fields, fieldset, messages = {}) => {
  setGroupValid(fields, fieldset);

  // Must have one field checked
  if ((isCheckboxes(fields) || isRadios(fields)) && !isGroupValid(fields)) {
    fields[0].setCustomValidity(messages.required);
    setGroupInvalid([fields[0]], fieldset);
    return;
  }

  // Mark up form field as valid/invalid (via [pattern])
  Array.from(fields).reverse().forEach((field) => {
    validate(field, messages, fieldset);

    // Ensure fieldset displays error
    if (field.validity.customError) {
      setGroupInvalid([field], fieldset);
    }
  });
};

/**
 * Shared utilities
 */
export * from './utils/index.mjs';
export * from './fields/index.mjs';
export * from './fieldsets/index.mjs';
