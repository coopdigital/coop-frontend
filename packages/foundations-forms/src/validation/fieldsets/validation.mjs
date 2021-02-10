import { addAriaDescription, removeAriaDescription } from '../utils/aria.mjs';

/**
 * Mark up fieldset fields as valid
 */
export const setGroupValid = (fields, fieldset) => {
  const messageId = `${fieldset.id}-error`;
  const message = document.getElementById(messageId);

  // Un-link error message
  if (message) {
    removeAriaDescription(fieldset, messageId);
    message.setAttribute('hidden', true);
    message.innerHTML = '';
  }
};

/**
 * Mark up fieldset fields as invalid
 */
export const setGroupInvalid = (fields, fieldset) => {
  const messageId = `${fieldset.id}-error`;
  const message = document.getElementById(messageId);

  if (!message) {
    return;
  }

  // Find first custom field error
  const validationMessage = Array.from(fields)
    .reduce((error, field) => error || (field.validity.customError && field.validationMessage), '');

  // Add first error message to fieldset, show
  if (validationMessage) {
    message.innerHTML = validationMessage;
    message.removeAttribute('hidden');

    // Attach error to fieldset
    addAriaDescription(fieldset, messageId);
  }
};
