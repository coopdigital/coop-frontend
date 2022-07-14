import React from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import PropTypes from 'prop-types';
import '@reach/combobox/styles.css';

const SearchableDropdown = ({ width }) => {
  return (
    <div className="coop-c-combobox" style={{ width }}>
      <label htmlFor="relationship" id="relationshipLabel">
        This person is my:
      </label>
      <Combobox openOnFocus aria-labelledby="relationshipLabel">
        <ComboboxInput id="relationship" />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption value="Child" />
            <ComboboxOption value="Grandchild" />
            <ComboboxOption value="Grandparent" />
            <ComboboxOption value="Parent" />
            <ComboboxOption value="Partner" />
            <ComboboxOption value="Spouse" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default SearchableDropdown;

SearchableDropdown.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
