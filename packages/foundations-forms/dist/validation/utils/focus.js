"use strict";

exports.__esModule = true;
exports.scrollTo = exports.focusTarget = void 0;

var _helpers = require("../fields/helpers");

/**
 * Scroll to target
 */
var scrollTo = function scrollTo(target) {
  return target.scrollIntoView();
}; // Scroll to target and focus


exports.scrollTo = scrollTo;

var focusTarget = function focusTarget(field, target) {
  scrollTo(target || (0, _helpers.getLabelOrLegend)(field));
  field.focus({
    preventScroll: true
  });
};

exports.focusTarget = focusTarget;
//# sourceMappingURL=focus.js.map