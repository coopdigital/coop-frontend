'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".coop-c-editorialcard{display:flex;flex:1;margin-bottom:2rem;position:relative}.coop-c-editorialcard--auto-height{height:calc(100% - 2rem);margin-bottom:2rem}.coop-c-editorialcard__inner{display:block;overflow:hidden;height:100%;background-color:#fff;border-radius:8px;box-shadow:0 2px 10px 0 rgba(0,0,0,.15);transition:box-shadow .2s ease-in;flex:1}.coop-c-editorialcard__inner:focus,.coop-c-editorialcard__inner:hover{box-shadow:0 2px 10px 0 rgba(0,0,0,.25)}@media (min-width:64em){.coop-c-editorialcard--twocol .coop-c-editorialcard__content{padding-right:5.25rem}}@media (min-width:48em){.coop-c-editorialcard--horizontal .coop-c-editorialcard__inner{display:flex;flex-direction:row}}@media (min-width:48em){.coop-c-editorialcard--flip .coop-c-editorialcard__inner{flex-direction:row-reverse}}.coop-c-editorialcard__link{display:block;width:100%;text-decoration:none;color:inherit;border:0}.coop-c-editorialcard__media{margin:0;padding:0;position:relative;z-index:2;background-color:#f3f3f3}.coop-c-editorialcard--horizontal .coop-c-editorialcard__media{overflow:hidden}@media (min-width:48em){.coop-c-editorialcard--horizontal .coop-c-editorialcard__media{flex-basis:31.6506309148%;width:31.6506309148%}}.coop-c-editorialcard__image{display:block}.coop-c-editorialcard__image img{display:block;width:100%;border:0}@media (min-width:48em){.coop-c-editorialcard--horizontal .coop-c-editorialcard__image,.coop-c-editorialcard--horizontal .coop-c-editorialcard__image img{height:100%;width:100%}}@media (-ms-high-contrast:none){.coop-c-editorialcard--horizontal .coop-c-editorialcard__image,.coop-c-editorialcard--horizontal .coop-c-editorialcard__image img{height:auto}}@media (min-width:48em){.coop-c-editorialcard--horizontal .coop-c-editorialcard__image img{object-fit:cover}}.coop-c-editorialcard__content{padding:1.25rem 1rem;position:relative;z-index:1;flex:1;color:#534f4f}@media (min-width:64em){.coop-c-editorialcard__content{padding:1.25rem}}@media (min-width:64em){.coop-c-editorialcard--horizontal .coop-c-editorialcard__media+.coop-c-editorialcard__content{padding-left:2rem;padding-right:11.25rem}}@media (min-width:64em){.coop-c-editorialcard--flip .coop-c-editorialcard__media+.coop-c-editorialcard__content{padding-left:1.25rem}}.coop-c-editorialcard__subtitle{margin:0 0 1.25rem;font-size:1.125rem;line-height:1.75rem}.coop-c-editorialcard__title{font-weight:600;font-size:1.375rem;line-height:2rem;margin:0;padding:0;color:#282828}a:focus .coop-c-editorialcard__title,a:hover .coop-c-editorialcard__title{text-decoration:underline}.coop-c-editorialcard__body{font-size:1.125rem;line-height:1.75rem;margin:.5rem 0 0;max-width:43.75rem}.coop-c-editorialcard__body p{font-size:inherit;line-height:inherit;margin-bottom:1rem;margin-top:1.25rem}.coop-c-editorialcard__body p:last-child{margin-bottom:0}";
styleInject(css_248z);

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
