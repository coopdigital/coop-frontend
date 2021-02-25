"use strict";

exports.__esModule = true;
exports.toggleAllMaskUnmask = exports.toggleMaskUnmask = exports.unmask = exports.mask = void 0;

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.for-each.js");

/**
 * Set field to type 'password'
 */
var mask = function mask(field) {
  field.setAttribute('type', 'password');
};
/**
 * Set field to type 'text'
 */


exports.mask = mask;

var unmask = function unmask(field) {
  field.setAttribute('type', 'text');
};
/**
 * Toggle password field type
 */


exports.unmask = unmask;

var toggleMaskUnmask = function toggleMaskUnmask(field) {
  if (field.getAttribute('type') === 'password') {
    unmask(field);
  } else {
    mask(field);
  }
};
/**
 * Toggle password fields type
 */


exports.toggleMaskUnmask = toggleMaskUnmask;

var toggleAllMaskUnmask = function toggleAllMaskUnmask(fields) {
  var hasHiddenPasswords = Array.from(fields).every(function (field) {
    return field.getAttribute('type') === 'password';
  }); // Toggle show/hide

  Array.from(fields).forEach(hasHiddenPasswords ? unmask : mask);
};

exports.toggleAllMaskUnmask = toggleAllMaskUnmask;
//# sourceMappingURL=passwords.js.map