"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = require("../validation/index");

var _index2 = _interopRequireDefault(require("../validation/summary/index"));

// Form elements
var form = document.getElementById('validation-demo');
var fullName = document.getElementById('validation-demo-name');
var emailAddress = document.getElementById('validation-demo-email'); // Validation summary

var summary = new _index2.default('validation-demo-box'); // Validate on submit

form.addEventListener('submit', function (event) {
  var errors = []; // Full name, validate

  (0, _index.validate)(fullName, {
    required: 'Enter your full name',
    invalid: 'Enter a valid full name'
  }); // Full name, validation summary link

  if (fullName.validity.customError) {
    errors.push({
      id: fullName.id,
      message: fullName.validationMessage.toLowerCase()
    });
  } // Email address, validate


  (0, _index.validate)(emailAddress, {
    required: 'Enter your full name',
    invalid: 'Enter a valid full name'
  }); // Email address, validation summary link

  if (emailAddress.validity.customError) {
    errors.push({
      id: emailAddress.id,
      message: emailAddress.validationMessage.toLowerCase()
    });
  } // Show or clear errors


  if (errors.length) {
    summary.setErrors(errors);
  } else {
    summary.reset();
  } // Don't submit example


  event.preventDefault();
});
//# sourceMappingURL=validation-demo.js.map