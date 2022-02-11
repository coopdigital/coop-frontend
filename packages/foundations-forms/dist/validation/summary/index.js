"use strict";

exports.__esModule = true;
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

var _handlers = require("./handlers");

/**
 * Validation summary box
 */
var ValidationSummary = /*#__PURE__*/function () {
  function ValidationSummary(containerId, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$heading = _ref.heading,
        heading = _ref$heading === void 0 ? 'There’s a problem' : _ref$heading,
        _ref$message = _ref.message,
        message = _ref$message === void 0 ? 'Check the form. You must:' : _ref$message,
        _ref$errorOnClick = _ref.errorOnClick,
        errorOnClick = _ref$errorOnClick === void 0 ? _handlers.click : _ref$errorOnClick;

    this.heading = heading;
    this.message = message;
    this.container = document.getElementById(containerId); // Skip if already instantiated

    if (this.container.instance) {
      return this;
    } // Handle clicks on error links


    this.container.addEventListener('click', errorOnClick); // Auto-enable if already visible

    if (!this.container.hasAttribute('hidden')) {
      this.enable();
    } // Attach instance to container


    this.container.instance = this;
  }
  /**
   * Enable validation summary
   */


  var _proto = ValidationSummary.prototype;

  _proto.enable = function enable() {
    var id = this.container.id;
    this.container.setAttribute('aria-labelledby', id + "-heading");
    this.container.removeAttribute('hidden');
    this.container.focus();
  }
  /**
   * Reset validation summary
   */
  ;

  _proto.reset = function reset() {
    this.container.setAttribute('hidden', true);
    this.container.removeAttribute('aria-labelledby');
    this.container.innerHTML = '';
  }
  /**
   * Set single error message
   */
  ;

  _proto.setError = function setError(error) {
    if (error === void 0) {
      error = '';
    }

    this.reset();
    var heading = this.heading,
        id = this.container.id;
    this.container.appendChild(ValidationSummary.createHeading({
      heading: heading,
      id: id + "-heading"
    }));
    this.container.appendChild(ValidationSummary.createMessage({
      message: error
    })); // Enable container

    this.enable();
  }
  /**
   * Set multiple error messages
   */
  ;

  _proto.setErrors = function setErrors(errors) {
    if (errors === void 0) {
      errors = [];
    }

    this.reset();
    var heading = this.heading,
        message = this.message,
        id = this.container.id;
    this.container.appendChild(ValidationSummary.createHeading({
      heading: heading,
      id: id + "-heading"
    }));
    this.container.appendChild(ValidationSummary.createErrors({
      errors: errors,
      message: message
    })); // Enable container

    this.enable();
  }
  /**
   * Build error heading
   */
  ;

  ValidationSummary.createHeading = function createHeading(_ref2) {
    var heading = _ref2.heading,
        id = _ref2.id;
    var element = document.createElement('h2');
    element.id = id;
    element.innerHTML = heading;
    return element;
  }
  /**
   * Build message
   */
  ;

  ValidationSummary.createMessage = function createMessage(_ref3) {
    var message = _ref3.message;
    var element = document.createElement('p');
    element.classList.add('coop-c-message__message');
    element.innerHTML = message;
    return element;
  }
  /**
   * Build error link item
   */
  ;

  ValidationSummary.createError = function createError(_ref4) {
    var id = _ref4.id,
        message = _ref4.message,
        messageHtml = _ref4.messageHtml;
    var item = document.createElement('li'); // Custom HTML or plain link?

    if (messageHtml) {
      item.innerHTML = messageHtml;
    } else {
      var error = document.createElement('a'); // Customise link

      error.href = "#" + id;
      error.classList.add('coop-c-message__link');
      error.innerHTML = message; // Add error to list item

      item.appendChild(error);
    }

    return item;
  }
  /**
   * Build error list or single message
   */
  ;

  ValidationSummary.createErrors = function createErrors(_ref5) {
    var message = _ref5.message,
        errors = _ref5.errors;
    var fragment = document.createDocumentFragment();
    var subheading = ValidationSummary.createMessage({
      message: message
    });
    var list = document.createElement('ul'); // Mark up list

    list.classList.add('coop-c-message__list'); // Add each error

    errors.forEach(function (item) {
      return list.appendChild(ValidationSummary.createError(item));
    }); // Add subheading, error list

    fragment.appendChild(subheading);
    fragment.appendChild(list);
    return fragment;
  };

  return ValidationSummary;
}();

var _default = ValidationSummary;
exports.default = _default;
//# sourceMappingURL=index.js.map