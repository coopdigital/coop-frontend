"use strict";

exports.__esModule = true;
exports.removeAriaDescription = exports.addAriaDescription = void 0;

require("core-js/modules/es.string.ends-with.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

/**
 * Append ID to ARIA "described by" list
 */
var addAriaDescription = function addAriaDescription(element, id) {
  var describedBy = element.getAttribute('aria-describedby') || ''; // Set ARIA description for screen readers

  if (!describedBy || !describedBy.endsWith(" " + id)) {
    element.setAttribute('aria-describedby', (describedBy + " " + id).trim());
  }
};
/**
 * Remove ID from ARIA "described by" list
 */


exports.addAriaDescription = addAriaDescription;

var removeAriaDescription = function removeAriaDescription(element, id) {
  var describedBy = (element.getAttribute('aria-describedby') || '').replace(id, '').trim(); // Remove/restore ARIA description for screen readers

  if (describedBy) {
    element.setAttribute('aria-describedby', describedBy);
  } else {
    element.removeAttribute('aria-describedby');
  }
};

exports.removeAriaDescription = removeAriaDescription;
//# sourceMappingURL=aria.js.map