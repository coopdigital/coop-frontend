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

const SearchableDropdown = ({ children, id, label, width }) => {
  const inputLabel = `${id}-label`;
  return (
    <div className={'coop-c-combobox'} style={{ width }}>
      <label htmlFor={id} id={inputLabel}>
        {label}
      </label>
      <Combobox openOnFocus aria-labelledby={inputLabel}>
        <ComboboxInput id={id} />
        <ComboboxPopover>
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SearchableOption.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
