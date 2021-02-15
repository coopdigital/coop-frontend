"use strict";

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

exports.__esModule = true;
exports.setGroupInvalid = exports.setGroupValid = void 0;

var _aria = require("../utils/aria");

/**
 * Mark up fieldset as valid
 */
var setGroupValid = function setGroupValid(fieldMap, fieldset) {
  var messageId = fieldset.id + "-error";
  var message = document.getElementById(messageId); // Un-link error message

  if (message) {
    (0, _aria.removeAriaDescription)(fieldset, messageId);
    message.setAttribute('hidden', true);
    message.innerHTML = '';
  }
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
  } // Find first custom field error


  var validationMessage = Array.from(fieldMap.keys()).reduce(function (error, field) {
    return error || field.validity.customError && field.validationMessage;
  }, ''); // Add first error message to fieldset, show

  if (validationMessage) {
    message.innerHTML = validationMessage;
    message.removeAttribute('hidden'); // Attach error to fieldset

    (0, _aria.addAriaDescription)(fieldset, messageId);
  }
};

exports.setGroupInvalid = setGroupInvalid;
//# sourceMappingURL=validation.js.map