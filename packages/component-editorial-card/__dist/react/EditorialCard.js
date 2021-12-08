"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("core-js/modules/es.string.link.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var EditorialCard = function EditorialCard(_ref) {
  var title = _ref.title,
      text = _ref.text,
      link = _ref.link,
      type = _ref.type,
      testId = _ref.testId;
  var tagAttributes = {
    className: "coop",
    role: type === "warn" || type === "error" ? "alert" : "status"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": testId,
    className: tagAttributes.className,
    role: tagAttributes.role
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "coop-c-notification__heading"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "coop-c-notification__p"
  }, link ? /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    className: "coop-c-notification__link"
  }, text) : text));
};

EditorialCard.defaultProps = {
  type: "info"
};
EditorialCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  link: _propTypes.default.string,
  type: _propTypes.default.oneOf(["info", "warn", "error", "success"]),
  testId: _propTypes.default.string
};
var _default = EditorialCard;
exports.default = _default;
//# sourceMappingURL=EditorialCard.js.map