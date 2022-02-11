"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.reset = exports.loading = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.promise.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/* eslint-disable no-param-reassign */

/* eslint-disable consistent-return */

/**
 * Reset button to default state
 */
var reset = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(button) {
    var buttonText, buttonTexts;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buttonText = button.querySelector('.coop-btn__text:not([role])');
            buttonTexts = button.querySelectorAll('.coop-btn__text'); // Remove loading spinner

            button.classList.remove('coop-btn--loading'); // Check for loading text

            if (!(buttonText && buttonTexts.length > 0)) {
              _context.next = 10;
              break;
            }

            clearTimeout(button.timerAnnounce); // Reset but suppress button text announcement

            button.setAttribute('aria-live', 'assertive');
            button.setAttribute('aria-relevant', 'additions'); // Hide all button text

            buttonTexts.forEach(function (element) {
              return element.setAttribute('hidden', true);
            }); // Show default button text

            buttonText.removeAttribute('hidden'); // Prepare for next announcement

            return _context.abrupt("return", new Promise(function (resolve) {
              return setTimeout(function () {
                button.setAttribute('aria-relevant', 'additions text');
                button.setAttribute('aria-atomic', 'true');
                resolve();
              }, 300);
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function reset(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Add loading state to button
 */


exports.reset = reset;

var loading = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(button) {
    var buttonText, buttonTexts;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            buttonText = button.querySelector('.coop-btn__text[role="status"]');
            buttonTexts = button.querySelectorAll('.coop-btn__text'); // Add loading spinner

            button.classList.add('coop-btn--loading'); // Check for loading text

            if (!(buttonText && buttonTexts.length > 0)) {
              _context2.next = 7;
              break;
            }

            buttonTexts.forEach(function (element) {
              return element.setAttribute('hidden', true);
            }); // Show button loading text

            buttonText.removeAttribute('hidden'); // Suppress next announcement

            return _context2.abrupt("return", new Promise(function (resolve) {
              return setTimeout(function () {
                button.setAttribute('aria-live', 'off');
                button.setAttribute('aria-atomic', 'false');
                resolve();
              }, 300);
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loading(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loading = loading;
//# sourceMappingURL=buttons.js.map