"use strict";

exports.__esModule = true;
exports.setGroupInvalid = exports.setGroupValid = void 0;

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.filter.js");

var _aria = require("../utils/aria");

/**
 * Mark up fieldset as valid
 */
var setGroupValid = function setGroupValid(fieldMap, fieldset) {
  var messageId = fieldset.id + "-error";
  var message = document.getElementById(messageId);
  var fields = Array.from(fieldMap.keys()); // Un-link error message

  if (message) {
    (0, _aria.removeAriaDescription)(fieldset, messageId);
    message.setAttribute('hidden', true);
    message.innerHTML = '';
  } // Mark up each form field as valid


  fields.forEach(function (field) {
    field.setCustomValidity('');
    field.classList.remove('coop-form__invalid');
  });
};
/**
 * Mark up fieldset as invalid
 */


exports.setGroupValid = setGroupValid;

var setGroupInvalid = function setGroupInvalid(fieldMap, fieldset) {
  var messageId = fieldset.id + "-error";
  var message = document.getElementById(messageId);

  if (!message) {
    return;
  } // Find all invalid fields


  var fieldsInvalid = Array.from(fieldMap.keys()).filter(function (field) {
    return field.validity.customError && field.validationMessage;
  }); // Add first error message to fieldset, show

  if (fieldsInvalid.length) {
    message.innerHTML = fieldsInvalid[0].validationMessage;
    message.removeAttribute('hidden'); // Attach error to fieldset

    (0, _aria.addAriaDescription)(fieldset, messageId); // Mark fields as invalid

    fieldsInvalid.forEach(function (field) {
      return field.classList.add('coop-form__invalid');
    });
  }
};

exports.setGroupInvalid = setGroupInvalid;
//# sourceMappingURL=validation.js.map