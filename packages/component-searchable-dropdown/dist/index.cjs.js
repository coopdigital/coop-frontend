'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var combobox = require('@reach/combobox');
var matchSorter = require('match-sorter');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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
  return React.useMemo(function () {
    return term.trim() === '' ? options : matchSorter.matchSorter(options, term);
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

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var handleChange = function handleChange(event) {
    return setInputValue(event.target.value);
  };

  var results = useFilteredResults(options, inputValue);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "coop-c-combobox ".concat(layoutClass, " ").concat(className),
    style: style
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id,
    id: inputLabel
  }, label), /*#__PURE__*/React__default["default"].createElement(combobox.Combobox, {
    openOnFocus: true,
    "aria-labelledby": inputLabel,
    onSelect: onSelect || null
  }, /*#__PURE__*/React__default["default"].createElement(combobox.ComboboxInput, {
    autoComplete: "off",
    id: id,
    onChange: handleChange
  }), /*#__PURE__*/React__default["default"].createElement(combobox.ComboboxPopover, {
    className: layoutClass
  }, /*#__PURE__*/React__default["default"].createElement(combobox.ComboboxList, null, results.length ? results.map(function (option) {
    return /*#__PURE__*/React__default["default"].createElement(combobox.ComboboxOption, {
      key: option,
      value: option
    });
  }) : /*#__PURE__*/React__default["default"].createElement("li", {
    className: "coop-c-combobox--null"
  }, "No revelant options")))));
};
SearchableDropdown.propTypes = {
  className: PropTypes__default["default"].string,
  compact: PropTypes__default["default"].bool,
  id: PropTypes__default["default"].string.isRequired,
  label: PropTypes__default["default"].string.isRequired,
  onSelect: PropTypes__default["default"].func,
  options: PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])).isRequired,
  style: PropTypes__default["default"].object
};

exports.SearchableDropdown = SearchableDropdown;
