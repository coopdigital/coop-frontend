"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./blockquote.pcss");

var BlockQuote = function BlockQuote(_ref) {
  var className = _ref.className,
      citation = _ref.citation,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("blockquote", null, /*#__PURE__*/_react.default.createElement("p", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("cite", null, citation));
};

BlockQuote.defaultProps = {
  className: null,
  citation: null,
  children: null
};
BlockQuote.propTypes = {
  className: _propTypes.default.string,
  citation: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = BlockQuote;
exports.default = _default;
//# sourceMappingURL=BlockQuote.js.map