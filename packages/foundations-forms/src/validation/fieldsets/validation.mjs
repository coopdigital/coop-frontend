import { addAriaDescription, removeAriaDescription } from '../utils/aria.mjs';

/**
 * Mark up fieldset as valid
 */
export const setGroupValid = (fieldMap, fieldset) => {
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
 * Mark up fieldset as invalid
 */
export const setGroupInvalid = (fieldMap, fieldset) => {
  const messageId = `${fieldset.id}-error`;
  const message = document.getElementById(messageId);

  if (!message) {
    return;
  }

  // Find first custom field error
  const validationMessage = Array.from(fieldMap.keys())
    .reduce((error, field) => error || (field.validity.customError && field.validationMessage), '');

  // Add first error message to fieldset, show
  if (validationMessage) {
    message.innerHTML = validationMessage;
    message.removeAttribute('hidden');

    // Attach error to fieldset
    addAriaDescription(fieldset, messageId);
  }
};
