/**
 * Detect checkbox field
 */
export const isCheckbox = (field) => field
  .getAttribute('type') === 'checkbox';

/**
 * Detect checkbox fields
 */
export const isCheckboxes = (fields) => Array.from(fields)
  .every(isCheckbox);

/**
 * Is field checked
 */
export const isChecked = (field) => isCheckbox(field) && field.checked;

/**
 * Has at least one field checked
 */
export const hasChecked = (fields) => Array.from(fields)
  .some(isChecked);

/**
 * Array of checked checkbox fields
 */
export const getChecked = (fields) => {
  const checked = Array.from(fields)
    .filter(isChecked);

  return checked.length
    ? checked
    : undefined;
};

/**
 * Array of checked checkbox field values
 */
export const getCheckedValues = (fields) => (getChecked(fields) || [])
  .map(({ value } = {}) => value);
