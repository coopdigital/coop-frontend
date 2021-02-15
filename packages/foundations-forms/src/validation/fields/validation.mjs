import { addAriaDescription, removeAriaDescription } from '../utils/aria.mjs';
import { setGroupInvalid } from '../fieldsets/validation.mjs';
import { getValue } from './helpers.mjs';

/**
 * Check form field has value
 * (e.g. via [value] attribute)
 */
export const hasValue = (field) => !!(field && !!getValue(field));

/**
 * Check form field is valid
 * (e.g. via [pattern] attribute)
 */
export const isValid = (field) => hasValue(field) && field.checkValidity();

/**
 * Mark up form field as valid
 */
export const setValid = (field, fieldset) => {
  const messageId = `${field.id}-error`;
  const message = document.getElementById(messageId);

  // Un-link error message
  if (message && !fieldset) {
    removeAriaDescription(field, messageId);
    message.setAttribute('hidden', true);
    message.innerHTML = '';
  }

  // Mark field as valid
  field.setCustomValidity('');
  field.classList.remove('coop-form__invalid');
};

/**
 * Mark up form field as invalid
 */
export const setInvalid = (field, fieldset) => {
  const messageId = `${field.id}-error`;
  const message = document.getElementById(messageId);

  // Mark field as invalid
  field.classList.add('coop-form__invalid');

  // Fill error message, show
  if (message && !fieldset) {
    message.innerHTML = field.validationMessage;
    message.removeAttribute('hidden');

    // Attach error to field
    addAriaDescription(field, messageId);
  } else if (fieldset) {
    setGroupInvalid(new Map([[field]]), fieldset);
  }
};
