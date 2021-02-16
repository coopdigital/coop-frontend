"use strict";

var _passwords = require("../fields/passwords");

// Form elements
var password = document.getElementById('password');
var passwordConfirm = document.getElementById('password-confirm');
var passwordToggle = document.getElementById('password-show-hide'); // Unmask password text when ticked

passwordToggle.addEventListener('click', function () {
  return (0, _passwords.toggleAllMaskUnmask)([password, passwordConfirm]);
});
//# sourceMappingURL=passwords.js.map