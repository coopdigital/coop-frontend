// Detect radio field
export const isRadio = (field) => field
  .getAttribute('type') === 'radio';

// Detect radio fields
export const isRadios = (fields) => Array.from(fields)
  .every(isRadio);

// Is field selected
export const isSelected = (field) => isRadio(field) && field.checked;

// Has at least one field checked
export const hasSelected = (fields) => Array.from(fields)
  .some(isSelected);

// Radio group selected field
export const getSelected = (fields) => Array.from(fields)
  .reduce((selectedField, field) => selectedField
    || (isSelected(field) ? field : undefined), undefined);

// Radio group selected field value
export const getSelectedValue = (fields) => getSelected(fields)?.value;
