"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./blockquote.css");

var Blockquote = function Blockquote(_ref) {
  var citation = _ref.citation,
      quote = _ref.quote,
      quoteLarge = _ref.quoteLarge;
  return /*#__PURE__*/_react.default.createElement("blockquote", {
    className: "coop-t-blockquote"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: quoteLarge ? 'coop-t-blockquote__quote coop-t-blockquote__quote--large' : 'coop-t-blockquote__quote'
  }, quote), /*#__PURE__*/_react.default.createElement("cite", {
    className: "coop-t-blockquote__cite"
  }, citation));
};

Blockquote.defaultProps = {
  quoteLarge: false,
  citation: null,
  quote: null
};
Blockquote.propTypes = {
  quoteLarge: _propTypes.default.bool,
  citation: _propTypes.default.string,
  quote: _propTypes.default.string
};
var _default = Blockquote;
exports.default = _default;
//# sourceMappingURL=Blockquote.js.map