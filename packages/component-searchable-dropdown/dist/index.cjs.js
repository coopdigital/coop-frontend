'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var downshift = require('downshift');
var PropTypes = require('prop-types');
var matchSorter = require('match-sorter');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

var filterItems = function filterItems(options, inputValue) {
  return inputValue !== '' ? matchSorter.matchSorter(options, inputValue) : options;
};

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

  var _useState = React.useState(options),
      _useState2 = _slicedToArray(_useState, 2),
      inputItems = _useState2[0],
      setInputItems = _useState2[1];

  var sizeVariant = compact ? 'compact' : '';
  var noResultsText = noResults || 'No relevant options';
  var placeholderValue = placeholder || null;

  var _useCombobox = downshift.useCombobox({
    id: id,
    items: inputItems,
    onInputValueChange: function onInputValueChange(_ref2) {
      var inputValue = _ref2.inputValue;
      setInputItems(filterItems(options, inputValue));
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

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "coop-c-combobox ".concat(sizeVariant, " ").concat(className),
    style: style
  }, /*#__PURE__*/React__default["default"].createElement("label", _extends({}, getLabelProps(), {
    htmlFor: "".concat(id, "-input")
  }), label), /*#__PURE__*/React__default["default"].createElement("div", getComboboxProps(), /*#__PURE__*/React__default["default"].createElement("input", _extends({}, getInputProps({
    onFocus: openMenu
  }), {
    placeholder: placeholderValue
  })), /*#__PURE__*/React__default["default"].createElement("button", _extends({
    type: "button"
  }, getToggleButtonProps(), {
    "aria-label": "toggle menu"
  }), /*#__PURE__*/React__default["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z"
  })))), /*#__PURE__*/React__default["default"].createElement("ul", getMenuProps(), isOpen && inputItems.length ? inputItems.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement("li", _extends({}, getItemProps({
      item: item,
      index: index
    }), {
      key: "".concat(item).concat(index)
    }), item);
  }) : null, isOpen && !inputItems.length ? /*#__PURE__*/React__default["default"].createElement("li", {
    className: "coop-c-combobox--null"
  }, noResultsText) : null));
};
SearchableDropdown.propTypes = {
  className: PropTypes__default["default"].string,
  compact: PropTypes__default["default"].bool,
  id: PropTypes__default["default"].string.isRequired,
  label: PropTypes__default["default"].string.isRequired,
  noResults: PropTypes__default["default"].string,
  onSelect: PropTypes__default["default"].func,
  options: PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])).isRequired,
  placeholder: PropTypes__default["default"].string,
  style: PropTypes__default["default"].object
};

exports.SearchableDropdown = SearchableDropdown;
