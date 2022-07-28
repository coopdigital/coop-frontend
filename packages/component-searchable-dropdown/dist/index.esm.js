import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import PropTypes from 'prop-types';
import { matchSorter } from 'match-sorter';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var SearchableDropdown = function SearchableDropdown(_ref) {
  var className = _ref.className,
      compact = _ref.compact,
      id = _ref.id,
      label = _ref.label,
      noResults = _ref.noResults,
      onSelect = _ref.onSelect,
      options = _ref.options,
      placeholder = _ref.placeholder,
      style = _ref.style;

  var _useState = useState(options),
      _useState2 = _slicedToArray(_useState, 2),
      inputItems = _useState2[0],
      setInputItems = _useState2[1];

  var sizeVariant = compact ? 'compact' : '';
  var noResultsText = noResults || 'No relevant options';
  var placeholderValue = placeholder || null;

  var _useCombobox = useCombobox({
    id: id,
    items: inputItems,
    onInputValueChange: function onInputValueChange(_ref2) {
      var inputValue = _ref2.inputValue;
      setInputItems(matchSorter(options, inputValue));
    },
    onSelectedItemChange: function onSelectedItemChange(_ref3) {
      var selected = _ref3.selectedItem;
      if (typeof onSelect === 'function') onSelect(selected);
      closeMenu();
    }
  }),
      isOpen = _useCombobox.isOpen,
      closeMenu = _useCombobox.closeMenu,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      getLabelProps = _useCombobox.getLabelProps,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      openMenu = _useCombobox.openMenu,
      getItemProps = _useCombobox.getItemProps;

  return /*#__PURE__*/React.createElement("div", {
    className: "coop-c-combobox ".concat(sizeVariant, " ").concat(className),
    style: style
  }, /*#__PURE__*/React.createElement("label", _extends({}, getLabelProps(), {
    htmlFor: "".concat(id, "-input")
  }), label), /*#__PURE__*/React.createElement("div", getComboboxProps(), /*#__PURE__*/React.createElement("input", _extends({}, getInputProps({
    onFocus: openMenu
  }), {
    placeholder: placeholderValue
  })), /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, getToggleButtonProps(), {
    "aria-label": "toggle menu"
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z"
  })))), /*#__PURE__*/React.createElement("ul", getMenuProps(), isOpen && inputItems.length ? inputItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", _extends({}, getItemProps({
      item: item,
      index: index
    }), {
      key: "".concat(item).concat(index)
    }), item);
  }) : null, isOpen && !inputItems.length ? /*#__PURE__*/React.createElement("li", {
    className: "coop-c-combobox--null"
  }, noResultsText) : null));
};
SearchableDropdown.propTypes = {
  className: PropTypes.string,
  compact: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  noResults: PropTypes.string,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object
};

export { SearchableDropdown };
