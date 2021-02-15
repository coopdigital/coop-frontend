/**
 * Append ID to ARIA "described by" list
 */
export const addAriaDescription = (element, id) => {
  const describedBy = element.getAttribute('aria-describedby') || '';

  // Set ARIA description for screen readers
  if (!describedBy || !describedBy.endsWith(` ${id}`)) {
    element.setAttribute('aria-describedby', `${describedBy} ${id}`.trim());
  }
};

/**
 * Remove ID from ARIA "described by" list
 */
export const removeAriaDescription = (element, id) => {
  const describedBy = (element.getAttribute('aria-describedby') || '').replace(id, '').trim();

  // Remove/restore ARIA description for screen readers
  if (describedBy) {
    element.setAttribute('aria-describedby', describedBy);
  } else {
    element.removeAttribute('aria-describedby');
  }
};
