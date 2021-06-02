"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./component.css");

// Example react component with 3 props, using prop-types for type management.
var Component = function Component(_ref) {
  var className = _ref.className,
      heading = _ref.heading,
      content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("article", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: className
  }, heading), /*#__PURE__*/_react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
};

Component.defaultProps = {
  className: null,
  heading: null,
  content: null
};
Component.propTypes = {
  className: _propTypes.default.string,
  heading: _propTypes.default.string,
  content: _propTypes.default.node
};
var _default = Component;
exports.default = _default;
//# sourceMappingURL=Component.js.map