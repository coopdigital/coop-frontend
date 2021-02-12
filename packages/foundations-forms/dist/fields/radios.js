"use strict";

require("core-js/modules/es.array.every.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.string.iterator.js");

exports.__esModule = true;
exports.getSelectedValue = exports.getSelected = exports.hasSelected = exports.isSelected = exports.isRadios = exports.isRadio = void 0;

// Detect radio field
var isRadio = function isRadio(field) {
  return field.getAttribute('type') === 'radio';
}; // Detect radio fields


exports.isRadio = isRadio;

var isRadios = function isRadios(fields) {
  return Array.from(fields).every(isRadio);
}; // Is field selected


exports.isRadios = isRadios;

var isSelected = function isSelected(field) {
  return isRadio(field) && field.checked;
}; // Has at least one field checked


exports.isSelected = isSelected;

var hasSelected = function hasSelected(fields) {
  return Array.from(fields).some(isSelected);
}; // Radio group selected field


exports.hasSelected = hasSelected;

var getSelected = function getSelected(fields) {
  return Array.from(fields).reduce(function (selectedField, field) {
    return selectedField || (isSelected(field) ? field : undefined);
  }, undefined);
}; // Radio group selected field value


exports.getSelected = getSelected;

var getSelectedValue = function getSelectedValue(fields) {
  var _getSelected;

  return (_getSelected = getSelected(fields)) === null || _getSelected === void 0 ? void 0 : _getSelected.value;
};

exports.getSelectedValue = getSelectedValue;
//# sourceMappingURL=radios.js.map