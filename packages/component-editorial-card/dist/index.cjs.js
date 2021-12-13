'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var EditorialCard = function EditorialCard(_ref) {
  var title = _ref.title,
      text = _ref.text,
      link = _ref.link,
      type = _ref.type,
      testId = _ref.testId;
  var tagAttributes = {
    className: "coop coop-c-editorialcard coop-c-editorialcard--horizontal",
    role: type === "warn" || type === "error" ? "alert" : "status"
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": testId,
    className: tagAttributes.className,
    role: tagAttributes.role
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "coop-c-editorialcard__inner "
  }, /*#__PURE__*/React__default["default"].createElement("h3", {
    className: "coop-c-editorialcard__title coop-c-notification__heading"
  }, title), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "coop-c-notification__p"
  }, link ? /*#__PURE__*/React__default["default"].createElement("a", {
    href: link,
    className: "coop-c-notification__link"
  }, text) : text)));
};

EditorialCard.defaultProps = {
  type: "info"
};
EditorialCard.propTypes = {
  title: PropTypes__default["default"].string.isRequired,
  text: PropTypes__default["default"].string.isRequired,
  link: PropTypes__default["default"].string,
  type: PropTypes__default["default"].oneOf(["info", "warn", "error", "success"]),
  testId: PropTypes__default["default"].string
};

/* eslint-disable func-names */

/* eslint-disable no-multi-assign */
var $ = document.querySelector.bind(document);
document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

function validatePostcode(getPostcode) {
  var validator = new RegExp(/\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/i);
  var valid = validator.test(getPostcode);
  return valid;
}

function showError(selector, message, parentElement) {
  var errorMessageClass = "".concat(selector, "__error");
  var $errorMessageSelector = $(".".concat(errorMessageClass));

  if ($errorMessageSelector) {
    $errorMessageSelector.innerHTML = message;
  } else {
    var errorMessage = document.createElement('p');
    errorMessage.classList.add(errorMessageClass);
    errorMessage.setAttribute('role', 'alert');
    errorMessage.innerHTML = message;
    $(parentElement).appendChild(errorMessage);
  }
}

function submitPostcode(e) {
  e.preventDefault();
  var postcodeInput = $('input#coop-c-postcode__search');
  var check = validatePostcode(postcodeInput.value);

  if (check) {
    window.location.replace("".concat(window.SHOP_URL, "?postcode=").concat(postcodeInput.value, "&utm_source=").concat(postcodeInput.dataset.utmSource, "&utm_medium=").concat(postcodeInput.dataset.utmMedium, "&utm_campaign=").concat(postcodeInput.dataset.utmCampaign));
  } else {
    $('div.coop-c-postcode').classList.add('error');
    var selector = 'coop-c-postcode';
    var parentElement = '.coop-c-postcode__inner';
    showError(selector, '<span class="coop-u-red-mid">Please enter a valid postcode format</span> <br /> For example  M4 4BE', parentElement);
  }
}

function postcode(form) {
  if (!form) {
    return;
  }

  form.addEventListener('submit', submitPostcode);
}

exports.EditorialCard = EditorialCard;
exports.postcode = postcode;
