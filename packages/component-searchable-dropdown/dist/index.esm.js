import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import { matchSorter } from 'match-sorter';

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

function useFilteredResults(options, term) {
  return useMemo(function () {
    return term.trim() === '' ? options : matchSorter(options, term);
  }, [options, term]);
}

var SearchableDropdown = function SearchableDropdown(_ref) {
  var className = _ref.className,
      compact = _ref.compact,
      id = _ref.id,
      label = _ref.label,
      onSelect = _ref.onSelect,
      options = _ref.options,
      style = _ref.style;
  var layoutClass = compact ? 'compact' : '';
  var inputLabel = "".concat(id, "-label");

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var handleChange = function handleChange(event) {
    return setInputValue(event.target.value);
  };

  var results = useFilteredResults(options, inputValue);
  return /*#__PURE__*/React.createElement("div", {
    className: "coop-c-combobox ".concat(layoutClass, " ").concat(className),
    style: style
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    id: inputLabel
  }, label), /*#__PURE__*/React.createElement(Combobox, {
    openOnFocus: true,
    "aria-labelledby": inputLabel,
    onSelect: onSelect || null
  }, /*#__PURE__*/React.createElement(ComboboxInput, {
    autoComplete: "off",
    id: id,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(ComboboxPopover, {
    className: layoutClass
  }, /*#__PURE__*/React.createElement(ComboboxList, null, results.length ? results.map(function (option) {
    return /*#__PURE__*/React.createElement(ComboboxOption, {
      key: option,
      value: option
    });
  }) : /*#__PURE__*/React.createElement("li", {
    className: "coop-c-combobox--null"
  }, "No revelant options")))));
};
SearchableDropdown.propTypes = {
  className: PropTypes.string,
  compact: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  style: PropTypes.object
};

export { SearchableDropdown };
