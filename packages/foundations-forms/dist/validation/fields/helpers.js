"use strict";

exports.__esModule = true;
exports.setValue = exports.getValue = exports.getLabelOrLegend = exports.getLabel = void 0;

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

var _selects = require("../../fields/selects");

/* eslint-disable no-param-reassign */

/**
 * Find field's matching or closest label
 */
var getLabel = function getLabel(field) {
  return document.querySelector("label[for=\"" + field.getAttribute('id') + "\"]") || field.closest('label');
};
/**
 * Find field's closest legend or label
 */


exports.getLabel = getLabel;

var getLabelOrLegend = function getLabelOrLegend(field) {
  var fieldset = field.closest('fieldset'); // Prefer legends for fieldsets

  if (fieldset) {
    var legend = fieldset.querySelector('legend');

    if (legend) {
      return legend;
    }
  }

  return getLabel(field);
};
/**
 * Get field value
 */


exports.getLabelOrLegend = getLabelOrLegend;

var getValue = function getValue(field) {
  var value = field.value;

  if ((0, _selects.isSelect)(field)) {
    var option = field.options[field.selectedIndex];
    value = option && option.value;
  }

  return value;
};
/**
 * Set field value
 */


exports.getValue = getValue;

var setValue = function setValue(field, value) {
  if ((0, _selects.isSelect)(field)) {
    Array.from(field.options).forEach(function (option) {
      option.selected = option.value === value;
    });
  } else {
    field.value = value;
  }
};

exports.setValue = setValue;
//# sourceMappingURL=helpers.js.map