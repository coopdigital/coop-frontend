import React from 'react';
import PropTypes from 'prop-types';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const SearchableDropdown = ({ children, compact, id, label, width }) => {
  const layoutClass = compact ? 'compact' : '';
  const inputLabel = `${id}-label`;
  return (
    <div className={`coop-c-combobox ${layoutClass}`} style={{ width }}>
      <label htmlFor={id} id={inputLabel}>
        {label}
      </label>
      <Combobox openOnFocus aria-labelledby={inputLabel}>
        <ComboboxInput id={id} />
        <ComboboxPopover className={layoutClass}>
          <ComboboxList>{children}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

const SearchableOption = ({ children, value }) => {
  if (children) {
    return (
      <ComboboxOption value={value}>
        {children} <ComboboxOptionText />
      </ComboboxOption>
    );
  }
  return <ComboboxOption value={value} />;
};

export { SearchableDropdown, SearchableOption };

SearchableDropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  compact: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SearchableOption.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
