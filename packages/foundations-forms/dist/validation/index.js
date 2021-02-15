"use strict";

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/web.dom-collections.iterator.js");

exports.__esModule = true;
var _exportNames = {
  validate: true,
  validateGroup: true
};
exports.validateGroup = exports.validate = void 0;

var _helpers = require("./fieldsets/helpers");

var _checkboxes = require("../fields/checkboxes");

var _radios = require("../fields/radios");

var _index = require("./fields/index");

var _index2 = require("./fieldsets/index");

var _index3 = require("./utils/index");

Object.keys(_index3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index3[key]) return;
  exports[key] = _index3[key];
});

var _index4 = require("./fields/index");

Object.keys(_index4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index4[key]) return;
  exports[key] = _index4[key];
});

var _index5 = require("./fieldsets/index");

Object.keys(_index5).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index5[key]) return;
  exports[key] = _index5[key];
});

/**
 * Validate form field
 * Automatically mark up as valid/invalid
 */
var validate = function validate(field, _temp, fieldset) {
  var _ref = _temp === void 0 ? {} : _temp,
      invalid = _ref.invalid,
      required = _ref.required;

  (0, _index.setValid)(field); // Field is empty

  if (!field.disabled && !(0, _index.getValue)(field)) {
    field.setCustomValidity(required); // Field is invalid (via [pattern])
  } else if (!field.disabled && !(0, _index.isValid)(field)) {
    field.setCustomValidity(invalid || required);
  } // Field failed validation


  if (field.validity.customError) {
    (0, _index.setInvalid)(field, fieldset);
  }
};
/**
 * Validate form fieldset group
 * Automatically mark up as valid/invalid
 */


exports.validate = validate;

var validateGroup = function validateGroup(fieldMap, fieldset, _ref2) {
  var required = _ref2.required,
      invalid = _ref2.invalid;
  var fields = Array.from(fieldMap.keys());
  var isCheckable = (0, _checkboxes.isCheckboxes)(fields) || (0, _radios.isRadios)(fields); // Reset group

  (0, _index2.setGroupValid)(fieldMap, fieldset); // All fields empty or unchecked? Use group required message

  if (!fields.some(_index.hasValue) || isCheckable && !(0, _helpers.isGroupValid)(fieldMap)) {
    fields.forEach(function (field) {
      return field.setCustomValidity(required);
    });
    (0, _index2.setGroupInvalid)(fieldMap, fieldset);
    return;
  } // All fields invalid? Use group invalid message


  if (!fields.some(_index.isValid)) {
    fields.forEach(function (field) {
      return field.setCustomValidity(invalid || required);
    });
    (0, _index2.setGroupInvalid)(fieldMap, fieldset);
    return;
  } // Mark up form field as valid/invalid (via [pattern])


  fields.reverse().forEach(function (field) {
    validate(field, fieldMap.get(field), fieldset); // Ensure fieldset displays error

    if (field.validity.customError) {
      (0, _index2.setGroupInvalid)(fieldMap, fieldset);
    }
  });
};
/**
 * Shared utilities
 */


exports.validateGroup = validateGroup;
//# sourceMappingURL=index.js.map