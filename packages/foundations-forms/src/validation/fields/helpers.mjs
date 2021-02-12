/* eslint-disable no-param-reassign */

import { isSelect } from '../../fields/selects.mjs';

/**
 * Find field's matching or closest label
 */
export const getLabel = (field) => document.querySelector(`label[for="${field.getAttribute('id')}"]`)
  || field.closest('label');

/**
 * Find field's closest legend or label
 */
export const getLabelOrLegend = (field) => {
  const fieldset = field.closest('fieldset');

  // Prefer legends for fieldsets
  if (fieldset) {
    const legend = fieldset.querySelector('legend');

    if (legend) {
      return legend;
    }
  }

  return getLabel(field);
};

/**
 * Get field value
 */
export const getValue = (field) => {
  let { value } = field;

  if (isSelect(field)) {
    const option = field.options[field.selectedIndex];
    value = option && option.value;
  }

  return value;
};

/**
 * Set field value
 */
export const setValue = (field, value) => {
  if (isSelect(field)) {
    Array.from(field.options).forEach((option) => {
      option.selected = option.value === value;
    });
  } else {
    field.value = value;
  }
};
