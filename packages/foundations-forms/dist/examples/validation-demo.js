"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _buttons = require("@coopdigital/foundations-buttons/dist/buttons.js");

var _index = require("../validation/index");

var _index2 = _interopRequireDefault(require("../validation/summary/index"));

// Form elements
var form = document.getElementById('validation-demo');
var fullName = document.getElementById('validation-demo-name');
var emailAddress = document.getElementById('validation-demo-email');
var button = form.querySelector('button'); // Validation summary

var summary = new _index2.default('validation-demo-box'); // Validate on submit

form.addEventListener('submit', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(event) {
    var errors;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault(); // Prevent double submit

            if (!form.dataset.busy) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            errors = []; // Full name, validate

            (0, _index.validate)(fullName, {
              required: 'Enter your full name',
              invalid: 'Enter a valid full name'
            }); // Full name, validation summary link

            if (fullName.validity.customError) {
              errors.push({
                id: fullName.id,
                message: fullName.validationMessage.toLowerCase()
              });
            } // Email address, validate


            (0, _index.validate)(emailAddress, {
              required: 'Enter your email address',
              invalid: 'Enter a valid email address'
            }); // Email address, validation summary link

            if (emailAddress.validity.customError) {
              errors.push({
                id: emailAddress.id,
                message: emailAddress.validationMessage.toLowerCase()
              });
            } // Show or clear errors


            if (!errors.length) {
              _context2.next = 12;
              break;
            }

            summary.setErrors(errors);
            _context2.next = 17;
            break;

          case 12:
            summary.reset(); // Pretend to submit

            form.dataset.busy = true;
            _context2.next = 16;
            return (0, _buttons.loading)(button);

          case 16:
            // Reset button
            setTimeout( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _buttons.reset)(button);

                    case 2:
                      delete form.dataset.busy;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), 3000);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=validation-demo.js.map