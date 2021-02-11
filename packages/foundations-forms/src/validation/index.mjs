import { isGroupValid } from './fieldsets/helpers.mjs';
import { isCheckboxes } from '../checkboxes.mjs';
import { isRadios } from '../radios.mjs';

import {
  getValue,
  hasValue,
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
export const validateGroup = (fieldMap, fieldset, { required, invalid }) => {
  const fields = Array.from(fieldMap.keys());
  const isCheckable = isCheckboxes(fields) || isRadios(fields);

  // Reset group
  setGroupValid(fieldMap, fieldset);

  // All fields empty or unchecked? Use group required message
  if (!fields.some(hasValue) || (isCheckable && !isGroupValid(fieldMap))) {
    fields.forEach((field) => field.setCustomValidity(required));
    setGroupInvalid(fieldMap, fieldset);
    return;
  }

  // All fields invalid? Use group invalid message
  if (!fields.some(isValid)) {
    fields.forEach((field) => field.setCustomValidity(invalid || required));
    setGroupInvalid(fieldMap, fieldset);
    return;
  }

  // Mark up form field as valid/invalid (via [pattern])
  fields.reverse().forEach((field) => {
    validate(field, fieldMap.get(field), fieldset);

    // Ensure fieldset displays error
    if (field.validity.customError) {
      setGroupInvalid(fieldMap, fieldset);
    }
  });
};

/**
 * Shared utilities
 */
export * from './utils/index.mjs';
export * from './fields/index.mjs';
export * from './fieldsets/index.mjs';
