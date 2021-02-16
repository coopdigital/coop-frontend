import { addAriaDescription, removeAriaDescription } from '../utils/aria.mjs';

/**
 * Mark up fieldset as valid
 */
export const setGroupValid = (fieldMap, fieldset) => {
  const messageId = `${fieldset.id}-error`;
  const message = document.getElementById(messageId);
  const fields = Array.from(fieldMap.keys());

  // Un-link error message
  if (message) {
    removeAriaDescription(fieldset, messageId);
    message.setAttribute('hidden', true);
    message.innerHTML = '';
  }

  // Mark up each form field as valid
  fields.forEach((field) => {
    field.setCustomValidity('');
    field.classList.remove('coop-form__invalid');
  });
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

  // Find all invalid fields
  const fieldsInvalid = Array.from(fieldMap.keys())
    .filter((field) => field.validity.customError && field.validationMessage);

  // Add first error message to fieldset, show
  if (fieldsInvalid.length) {
    message.innerHTML = fieldsInvalid[0].validationMessage;
    message.removeAttribute('hidden');

    // Attach error to fieldset
    addAriaDescription(fieldset, messageId);

    // Mark fields as invalid
    fieldsInvalid.forEach((field) => field
      .classList.add('coop-form__invalid'));
  }
};
