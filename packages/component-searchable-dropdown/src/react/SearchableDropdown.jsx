/* eslint-disable indent */
import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import PropTypes from 'prop-types';
import { matchSorter } from 'match-sorter';

const SearchableDropdownHighlight = ({ item, input }) => {
  if (!input.trim()) return <span>{item}</span>;

  const regex = new RegExp(`(${input})`, 'gi');
  const parts = item.split(regex);

  return (
    <span>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? <span key={i}>{part}</span> : <mark key={i}>{part}</mark>;
      })}
    </span>
  );
};

const SearchableDropdown = ({
  className,
  compact,
  id,
  label,
  noResults,
  onSelect,
  options,
  placeholder,
  style,
}) => {
  const [inputItems, setInputItems] = useState(options);
  const sizeVariant = compact ? 'compact' : '';
  const noResultsText = noResults || 'No relevant options';
  const placeholderValue = placeholder || null;
  const [input, setInput] = useState('');
  const {
    isOpen,
    closeMenu,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    openMenu,
    getItemProps,
  } = useCombobox({
    id,
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(matchSorter(options, inputValue));
      setInput(inputValue);
    },
    onSelectedItemChange: ({ selectedItem: selected }) => {
      if (typeof onSelect === 'function') onSelect(selected);
      closeMenu();
    },
  });

  return (
    <div className={`coop-c-combobox ${sizeVariant} ${className}`} style={style}>
      <label {...getLabelProps()} htmlFor={`${id}-input`}>
        {label}
      </label>
      <div {...getComboboxProps()}>
        <input {...getInputProps({ onFocus: openMenu })} placeholder={placeholderValue} />
        <button type="button" {...getToggleButtonProps()} aria-label="toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z" />
          </svg>
        </button>
      </div>
      <ul {...getMenuProps()}>
        {isOpen && inputItems.length
          ? inputItems.map((item, index) => (
              <li {...getItemProps({ item, index })} key={`${item}${index}`}>
                <SearchableDropdownHighlight input={input} item={item} />
              </li>
            ))
          : null}
        {isOpen && !inputItems.length ? (
          <li className="coop-c-combobox--null">{noResultsText}</li>
        ) : null}
      </ul>
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
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

SearchableDropdownHighlight.propTypes = {
  input: PropTypes.string,
  item: PropTypes.string,
};
