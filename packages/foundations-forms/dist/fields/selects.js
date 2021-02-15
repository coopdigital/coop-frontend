"use strict";

exports.__esModule = true;
exports.isSelect = void 0;

/* eslint-disable import/prefer-default-export */
// Detect select menu
var isSelect = function isSelect(field) {
  return !!(field !== null && field !== void 0 && field.options && 'selectedIndex' in field);
};

exports.isSelect = isSelect;
//# sourceMappingURL=selects.js.map