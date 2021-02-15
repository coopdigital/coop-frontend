"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

exports.__esModule = true;
exports.setInvalid = exports.setValid = exports.isValid = exports.hasValue = void 0;

var _aria = require("../utils/aria");

var _validation = require("../fieldsets/validation");

var _helpers = require("./helpers");

/**
 * Check form field has value
 * (e.g. via [value] attribute)
 */
var hasValue = function hasValue(field) {
  return !!(field && !!(0, _helpers.getValue)(field));
};
/**
 * Check form field is valid
 * (e.g. via [pattern] attribute)
 */


exports.hasValue = hasValue;

var isValid = function isValid(field) {
  return hasValue(field) && field.checkValidity();
};
/**
 * Mark up form field as valid
 */


exports.isValid = isValid;

var setValid = function setValid(field, fieldset) {
  var messageId = field.id + "-error";
  var message = document.getElementById(messageId); // Un-link error message

  if (message && !fieldset) {
    (0, _aria.removeAriaDescription)(field, messageId);
    message.setAttribute('hidden', true);
    message.innerHTML = '';
  } // Mark field as valid


  field.setCustomValidity('');
  field.classList.remove('coop-form__invalid');
};
/**
 * Mark up form field as invalid
 */


exports.setValid = setValid;

var setInvalid = function setInvalid(field, fieldset) {
  var messageId = field.id + "-error";
  var message = document.getElementById(messageId); // Mark field as invalid

  field.classList.add('coop-form__invalid'); // Fill error message, show

  if (message && !fieldset) {
    message.innerHTML = field.validationMessage;
    message.removeAttribute('hidden'); // Attach error to field

    (0, _aria.addAriaDescription)(field, messageId);
  } else if (fieldset) {
    (0, _validation.setGroupInvalid)(new Map([[field]]), fieldset);
  }
};

exports.setInvalid = setInvalid;
//# sourceMappingURL=validation.js.map