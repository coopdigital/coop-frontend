"use strict";

require("core-js/modules/es.array.every.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.string.iterator.js");

exports.__esModule = true;
exports.getCheckedValues = exports.getChecked = exports.hasChecked = exports.isChecked = exports.isCheckboxes = exports.isCheckbox = void 0;

/**
 * Detect checkbox field
 */
var isCheckbox = function isCheckbox(field) {
  return field.getAttribute('type') === 'checkbox';
};
/**
 * Detect checkbox fields
 */


exports.isCheckbox = isCheckbox;

var isCheckboxes = function isCheckboxes(fields) {
  return Array.from(fields).every(isCheckbox);
};
/**
 * Is field checked
 */


exports.isCheckboxes = isCheckboxes;

var isChecked = function isChecked(field) {
  return isCheckbox(field) && field.checked;
};
/**
 * Has at least one field checked
 */


exports.isChecked = isChecked;

var hasChecked = function hasChecked(fields) {
  return Array.from(fields).some(isChecked);
};
/**
 * Array of checked checkbox fields
 */


exports.hasChecked = hasChecked;

var getChecked = function getChecked(fields) {
  var checked = Array.from(fields).filter(isChecked);
  return checked.length ? checked : undefined;
};
/**
 * Array of checked checkbox field values
 */


exports.getChecked = getChecked;

var getCheckedValues = function getCheckedValues(fields) {
  return (getChecked(fields) || []).map(function (_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        value = _ref.value;

    return value;
  });
};

exports.getCheckedValues = getCheckedValues;
//# sourceMappingURL=checkboxes.js.map