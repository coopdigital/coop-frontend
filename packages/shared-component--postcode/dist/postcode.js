"use strict";

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _require = require('./modules/bling.js'),
    $ = _require.$;

var _require2 = require('./modules/helpers.js'),
    validatePostcode = _require2.validatePostcode,
    showError = _require2.showError;

function submitPostcode(e) {
  e.preventDefault();
  var postcodeInput = $('input#coop-c-postcode__search');
  var check = validatePostcode(postcodeInput.value);

  if (check) {
    window.location.replace(window.SHOP_URL + "?postcode=" + postcodeInput.value + "&utm_source=" + postcodeInput.dataset.utmSource + "&utm_medium=" + postcodeInput.dataset.utmMedium + "&utm_campaign=" + postcodeInput.dataset.utmCampaign);
  } else {
    $('div.coop-c-postcode').classList.add('error');
    var selector = 'coop-c-postcode';
    var parentElement = '.coop-c-postcode__inner';
    showError(selector, '<span class="coop-u-red-mid">Please enter a valid postcode format</span> <br /> For example  M4 4BE', parentElement);
  }
}

function postcode(form) {
  if (!form) {
    return;
  }

  form.addEventListener('submit', submitPostcode);
}

module.exports = postcode;
//# sourceMappingURL=postcode.js.map