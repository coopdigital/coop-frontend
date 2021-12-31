"use strict";

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

var _require = require('./bling.js'),
    $ = _require.$;

function validatePostcode(getPostcode) {
  var validator = new RegExp(/\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/i);
  var valid = validator.test(getPostcode);
  return valid;
}

function showError(selector, message, parentElement) {
  var errorMessageClass = selector + "__error";
  var $errorMessageSelector = $("." + errorMessageClass);

  if ($errorMessageSelector) {
    $errorMessageSelector.innerHTML = message;
  } else {
    var errorMessage = document.createElement('p');
    errorMessage.classList.add(errorMessageClass);
    errorMessage.setAttribute('role', 'alert');
    errorMessage.innerHTML = message;
    $(parentElement).appendChild(errorMessage);
  }
}

module.exports = {
  validatePostcode: validatePostcode,
  showError: showError
};
//# sourceMappingURL=helpers.js.map