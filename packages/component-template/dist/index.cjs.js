'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function Component() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "coop-c-component"
  }, "Example HTML");
};

var supportingFunction = function supportingFunction() {
  // eslint-disable-next-line no-console
  console.log('Kaboom');
};

exports.Component = Component;
exports.supportingFunction = supportingFunction;
