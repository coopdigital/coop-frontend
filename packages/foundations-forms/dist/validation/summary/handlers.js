"use strict";

exports.__esModule = true;
exports.click = void 0;

var _focus = require("../utils/focus");

/* eslint-disable import/prefer-default-export */

/**
 * Validation summary link click
 */
var click = function click(event) {
  if (event.target.classList.contains('coop-c-message__link')) {
    var fieldId = event.target.getAttribute('href');
    var field = document.querySelector(fieldId);

    if (field) {
      event.preventDefault(); // Scroll to field, focus

      (0, _focus.focusTarget)(field); // Click into field (not automatic in Firefox/Safari)

      if (field.matches('input:not([type=radio]):not([type=checkbox]), textarea')) {
        field.click();
      }
    }
  }
};

exports.click = click;
//# sourceMappingURL=handlers.js.map