import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import { matchSorter } from 'match-sorter';
import '@reach/combobox/styles.css';

function useFilteredResults(options, term) {
  return useMemo(
    () => (term.trim() === '' ? options : matchSorter(options, term)),
    [options, term]
  );
}

const SearchableDropdown = ({ children, compact, id, label, options, width }) => {
  const layoutClass = compact ? 'compact' : '';
  const inputLabel = `${id}-label`;

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => setInputValue(event.target.value);
  const results = useFilteredResults(options, inputValue);

  return (
    <div className={`coop-c-combobox ${layoutClass}`} style={{ width }}>
      <label htmlFor={id} id={inputLabel}>
        {label}
      </label>
      <Combobox openOnFocus aria-labelledby={inputLabel}>
        <ComboboxInput autoComplete="off" id={id} onChange={handleChange} />
        <ComboboxPopover className={layoutClass}>
          {/* <ComboboxList>{children}</ComboboxList> */}
          <ComboboxList>
            {results.length ? (
              results.map((option) => {
                return <ComboboxOption key={option} value={option} />;
              })
            ) : (
              <li className="coop-c-combobox--null">No revelant options</li>
            )}
          </ComboboxList>
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
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SearchableOption.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
