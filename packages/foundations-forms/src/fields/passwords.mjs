/**
 * Set field to type 'password'
 */
export const mask = (field) => {
  field.setAttribute('type', 'password');
};

/**
 * Set field to type 'text'
 */
export const unmask = (field) => {
  field.setAttribute('type', 'text');
};

/**
 * Toggle password field type
 */
export const toggleMaskUnmask = (field) => {
  if (field.getAttribute('type') === 'password') {
    unmask(field);
  } else {
    mask(field);
  }
};

/**
 * Toggle password fields type
 */
export const toggleAllMaskUnmask = (fields) => {
  const hasHiddenPasswords = Array.from(fields)
    .every((field) => field.getAttribute('type') === 'password');

  // Toggle show/hide
  Array.from(fields)
    .forEach(hasHiddenPasswords
      ? unmask
      : mask);
};
