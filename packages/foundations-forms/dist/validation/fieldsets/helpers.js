"use strict";

exports.__esModule = true;
exports.isGroupValid = void 0;

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _validation = require("../fields/validation");

var _checkboxes = require("../../fields/checkboxes");

var _radios = require("../../fields/radios");

/* eslint-disable import/prefer-default-export */

/**
 * Check fieldset fields are valid
 */
var isGroupValid = function isGroupValid(fieldMap) {
  var fields = Array.from(fieldMap.keys()); // Only one checkbox is required

  if ((0, _checkboxes.isCheckboxes)(fields)) {
    return (0, _checkboxes.hasChecked)(fields);
  } // Only one radio is required


  if ((0, _radios.isRadios)(fields)) {
    return (0, _radios.hasSelected)(fields);
  } // For others, every field is required


  return fields.every(_validation.isValid);
};

exports.isGroupValid = isGroupValid;
//# sourceMappingURL=helpers.js.map