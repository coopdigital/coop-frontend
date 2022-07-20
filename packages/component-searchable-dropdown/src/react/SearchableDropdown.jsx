import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import { matchSorter } from 'match-sorter';

function useFilteredResults(options, term) {
  return useMemo(
    () => (term.trim() === '' ? options : matchSorter(options, term)),
    [options, term]
  );
}

const SearchableDropdown = ({
  className,
  compact,
  id,
  label,
  noResults,
  onSelect,
  options,
  style,
}) => {
  const layoutClass = compact ? 'compact' : '';
  const inputLabel = `${id}-label`;
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => setInputValue(event.target.value);
  const results = useFilteredResults(options, inputValue);
  const noResultsText = noResults || 'No relevant options';

  return (
    <div className={`coop-c-combobox ${layoutClass} ${className}`} style={style}>
      <label htmlFor={id} id={inputLabel}>
        {label}
      </label>
      <Combobox openOnFocus aria-labelledby={inputLabel} onSelect={onSelect || null}>
        <ComboboxInput autoComplete="off" id={id} onChange={handleChange} />
        <ComboboxPopover className={layoutClass}>
          <ComboboxList>
            {results.length ? (
              results.map((option) => {
                return <ComboboxOption key={option} value={option} />;
              })
            ) : (
              <li className="coop-c-combobox--null">{noResultsText}</li>
            )}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export { SearchableDropdown };

SearchableDropdown.propTypes = {
  className: PropTypes.string,
  compact: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  noResults: PropTypes.string,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  style: PropTypes.object,
};
