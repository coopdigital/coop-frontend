import React, { useRef, useEffect } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/* eslint-disable no-param-reassign, no-console */

/**
 * Use aria-selected to highlight the selected option in CSS
 */
var SearchableDropdownLibrary = /*#__PURE__*/function () {
  function SearchableDropdownLibrary(container) {
    _classCallCheck(this, SearchableDropdownLibrary);

    this.combobox = container.querySelector('[data-combobox]');
    this.input = container.querySelector('[data-input]');
    this.dropDown = container.querySelector('[data-dropdown]');
    this.list = container.querySelector('[data-list]');
    this.options = container.querySelectorAll('[data-option]');
    this.comboboxIsOpen = false;
    this.hasResults = 0;
  }

  _createClass(SearchableDropdownLibrary, [{
    key: "setup",
    value: function setup() {
      var _this = this;

      this.input.addEventListener('focusin', function () {
        console.log('focus in');

        _this.toggleDropdown(_this.dropDown);
      }); // this.input.addEventListener('blur', () => {
      //   // We close the dropdown on blur but this will close
      //   // if we click on the list
      //   SearchableDropdownLibrary.toggleDropdown(this.dropDown);
      // });

      this.list.addEventListener('mousedown', function (evt) {
        console.log(evt);

        _this.updateSelection(evt, _this.input);

        _this.toggleDropdown(_this.dropDown);
      });
      this.input.addEventListener('focusout', function (evt) {
        console.log(evt);

        _this.closeDropDown(_this.dropDown);
      });
      this.input.addEventListener('input', function (evt) {
        _this.filterOptions(_this.list, _this.options, evt);
      });

      this.toggleDropdown = function (dropDown) {
        if (_this.comboboxIsOpen) {
          _this.closeDropDown(dropDown);

          return;
        }

        _this.openDropDown(dropDown);
      };

      this.openDropDown = function (dropDown) {
        _this.comboboxIsOpen = true;
        dropDown.setAttribute('aria-expanded', 'true');
      };

      this.closeDropDown = function (dropDown) {
        dropDown.setAttribute('aria-expanded', 'false');
        _this.comboboxIsOpen = false;
      };
      /**
       * Filter the input from user input and return them as a new list. If no
       * results then return a no results message
       */


      this.filterOptions = function (list, options, event) {
        // Clear down the list before we re-populate.
        list.innerHTML = '';
        var inputValue = event.target.value;
        var getOptions = Array.from(options).map(function (option) {
          return option.innerHTML;
        }); // Ensure both the option and the input value are lower case to allow for
        // case sensitive matches

        var filteredOptions = Array.from(getOptions).filter(function (option) {
          return option.toLowerCase().includes(inputValue.toLowerCase());
        });

        if (filteredOptions.length > 0) {
          _this.hasResults = filteredOptions.length;
          filteredOptions.forEach(function (filteredOption) {
            var option = _this.createOption(filteredOption);

            list.append(option);
          });
        } else {
          var noResultOption = _this.createNoResultOption();

          list.append(noResultOption);
        }
      };
      /**
       * Updating the selection from a user
       */


      this.updateSelection = function (selection, targetInput) {
        console.log(selection, targetInput);

        if (selection && selection.target.innerText) {
          targetInput.value = selection.target.innerText;
        }
      };
      /**
       * Creating a new option from the filtered results
       *
       * Is this the best way? Could this impact perf if there are lots of options?
       */


      this.createOption = function (text) {
        var option = document.createElement('li');
        option.setAttribute('data-option', '');
        option.innerHTML = text;
        return option;
      };

      this.createNoResultOption = function () {
        var option = document.createElement('p');
        option.setAttribute('data-no-results', '');
        option.innerHTML = 'No relevant options';
        return option;
      };
    }
  }]);

  return SearchableDropdownLibrary;
}();
//  *   This content is licensed according to the W3C Software License at
//  *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
//  */
// /**
//  * @constructor
//  *
//  * @desc
//  *  Combobox object representing the state and interactions for a combobox
//  *  widget
//  *
//  * @param comboboxNode
//  *  The DOM node pointing to the combobox
//  * @param input
//  *  The input node
//  * @param listbox
//  *  The listbox node to load results in
//  * @param searchFn
//  *  The search function. The function accepts a search string and returns an
//  *  array of results.
//  */
// aria.ListboxCombobox = function (
//   comboboxNode,
//   input,
//   listbox,
//   searchFn,
//   shouldAutoSelect,
//   onShow,
//   onHide
// ) {
//   this.combobox = comboboxNode;
//   this.input = input;
//   this.listbox = listbox;
//   this.searchFn = searchFn;
//   this.shouldAutoSelect = shouldAutoSelect;
//   this.onShow = onShow || function () {};
//   this.onHide = onHide || function () {};
//   this.activeIndex = -1;
//   this.resultsCount = 0;
//   this.shown = false;
//   this.hasInlineAutocomplete =
//     input.getAttribute("aria-autocomplete") === "both";
//   this.setupEvents();
// };
// aria.ListboxCombobox.prototype.setupEvents = function () {
//   document.body.addEventListener("click", this.checkHide.bind(this));
//   this.input.addEventListener("keyup", this.checkKey.bind(this));
//   this.input.addEventListener("keydown", this.setActiveItem.bind(this));
//   this.input.addEventListener("focus", this.checkShow.bind(this));
//   this.input.addEventListener("blur", this.checkSelection.bind(this));
//   this.listbox.addEventListener("click", this.clickItem.bind(this));
// };
// aria.ListboxCombobox.prototype.checkKey = function (evt) {
//   var key = evt.which || evt.keyCode;
//   switch (key) {
//     case aria.KeyCode.UP:
//     case aria.KeyCode.DOWN:
//     case aria.KeyCode.ESC:
//     case aria.KeyCode.RETURN:
//       evt.preventDefault();
//       return;
//     default:
//       this.updateResults(false);
//   }
//   if (this.hasInlineAutocomplete) {
//     switch (key) {
//       case aria.KeyCode.BACKSPACE:
//         return;
//       default:
//         this.autocompleteItem();
//     }
//   }
// };
// aria.ListboxCombobox.prototype.updateResults = function (shouldShowAll) {
//   var searchString = this.input.value;
//   var results = this.searchFn(searchString);
//   this.hideListbox();
//   if (!shouldShowAll && !searchString) {
//     results = [];
//   }
//   if (results.length) {
//     for (var i = 0; i < results.length; i++) {
//       var resultItem = document.createElement("li");
//       resultItem.className = "result";
//       resultItem.setAttribute("role", "option");
//       resultItem.setAttribute("id", "result-item-" + i);
//       resultItem.innerText = results[i];
//       if (this.shouldAutoSelect && i === 0) {
//         resultItem.setAttribute("aria-selected", "true");
//         aria.Utils.addClass(resultItem, "focused");
//         this.activeIndex = 0;
//       }
//       this.listbox.appendChild(resultItem);
//     }
//     aria.Utils.removeClass(this.listbox, "hidden");
//     this.combobox.setAttribute("aria-expanded", "true");
//     this.resultsCount = results.length;
//     this.shown = true;
//     this.onShow();
//   }
// };
// aria.ListboxCombobox.prototype.setActiveItem = function (evt) {
//   var key = evt.which || evt.keyCode;
//   var activeIndex = this.activeIndex;
//   if (key === aria.KeyCode.ESC) {
//     this.hideListbox();
//     setTimeout(
//       function () {
//         // On Firefox, input does not get cleared here unless wrapped in
//         // a setTimeout
//         this.input.value = "";
//       }.bind(this),
//       1
//     );
//     return;
//   }
//   if (this.resultsCount < 1) {
//     if (
//       this.hasInlineAutocomplete &&
//       (key === aria.KeyCode.DOWN || key === aria.KeyCode.UP)
//     ) {
//       this.updateResults(true);
//     } else {
//       return;
//     }
//   }
//   var prevActive = this.getItemAt(activeIndex);
//   var activeItem;
//   switch (key) {
//     case aria.KeyCode.UP:
//       if (activeIndex <= 0) {
//         activeIndex = this.resultsCount - 1;
//       } else {
//         activeIndex--;
//       }
//       break;
//     case aria.KeyCode.DOWN:
//       if (activeIndex === -1 || activeIndex >= this.resultsCount - 1) {
//         activeIndex = 0;
//       } else {
//         activeIndex++;
//       }
//       break;
//     case aria.KeyCode.RETURN:
//       activeItem = this.getItemAt(activeIndex);
//       this.selectItem(activeItem);
//       return;
//     case aria.KeyCode.TAB:
//       this.checkSelection();
//       this.hideListbox();
//       return;
//     default:
//       return;
//   }
//   evt.preventDefault();
//   activeItem = this.getItemAt(activeIndex);
//   this.activeIndex = activeIndex;
//   if (prevActive) {
//     aria.Utils.removeClass(prevActive, "focused");
//     prevActive.setAttribute("aria-selected", "false");
//   }
//   if (activeItem) {
//     this.input.setAttribute(
//       "aria-activedescendant",
//       "result-item-" + activeIndex
//     );
//     aria.Utils.addClass(activeItem, "focused");
//     activeItem.setAttribute("aria-selected", "true");
//     if (this.hasInlineAutocomplete) {
//       this.input.value = activeItem.innerText;
//     }
//   } else {
//     this.input.setAttribute("aria-activedescendant", "");
//   }
// };
// aria.ListboxCombobox.prototype.getItemAt = function (index) {
//   return document.getElementById("result-item-" + index);
// };
// aria.ListboxCombobox.prototype.clickItem = function (evt) {
//   if (evt.target && evt.target.nodeName == "LI") {
//     this.selectItem(evt.target);
//   }
// };
// aria.ListboxCombobox.prototype.selectItem = function (item) {
//   if (item) {
//     this.input.value = item.innerText;
//     this.hideListbox();
//   }
// };
// aria.ListboxCombobox.prototype.checkShow = function (evt) {
//   this.updateResults(false);
// };
// aria.ListboxCombobox.prototype.checkHide = function (evt) {
//   if (evt.target === this.input || this.combobox.contains(evt.target)) {
//     return;
//   }
//   this.hideListbox();
// };
// aria.ListboxCombobox.prototype.hideListbox = function () {
//   this.shown = false;
//   this.activeIndex = -1;
//   this.listbox.innerHTML = "";
//   aria.Utils.addClass(this.listbox, "hidden");
//   this.combobox.setAttribute("aria-expanded", "false");
//   this.resultsCount = 0;
//   this.input.setAttribute("aria-activedescendant", "");
//   this.onHide();
// };
// aria.ListboxCombobox.prototype.checkSelection = function () {
//   if (this.activeIndex < 0) {
//     return;
//   }
//   var activeItem = this.getItemAt(this.activeIndex);
//   this.selectItem(activeItem);
// };
// aria.ListboxCombobox.prototype.autocompleteItem = function () {
//   var autocompletedItem = this.listbox.querySelector(".focused");
//   var inputText = this.input.value;
//   if (!autocompletedItem || !inputText) {
//     return;
//   }
//   var autocomplete = autocompletedItem.innerText;
//   if (inputText !== autocomplete) {
//     this.input.value = autocomplete;
//     this.input.setSelectionRange(inputText.length, autocomplete.length);
//   }
// };

var SearchableDropdown = function SearchableDropdown() {
  var comboboxRef = useRef();
  useEffect(function () {
    new SearchableDropdownLibrary(comboboxRef.current).setup();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: comboboxRef
  }, /*#__PURE__*/React.createElement("div", {
    "data-combobox": true
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "combobox"
  }, "How you know them"), /*#__PURE__*/React.createElement("input", {
    name: "combobox",
    className: "coop-form__input",
    type: "text",
    placeholder: "Select option",
    "data-input": true,
    "data-testid": "combobox-input",
    role: "combobox",
    "aria-controls": "comboboxvalues",
    "aria-autocomplete": "list",
    "aria-expanded": "false"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    },
    "data-dropdown": true,
    "data-testid": "combobox-dropdown"
  }, /*#__PURE__*/React.createElement("ul", {
    id: "comboboxvalues",
    role: "listbox",
    "data-list": true
  }, /*#__PURE__*/React.createElement("li", {
    role: "option",
    "aria-selected": "false",
    "data-option": true
  }, "Partner"), /*#__PURE__*/React.createElement("li", {
    role: "option",
    "aria-selected": "false",
    "data-option": true
  }, "Spouse"), /*#__PURE__*/React.createElement("li", {
    role: "option",
    "aria-selected": "false",
    "data-option": true
  }, "Parent"), /*#__PURE__*/React.createElement("li", {
    role: "option",
    "aria-selected": "false",
    "data-option": true
  }, "Child"), /*#__PURE__*/React.createElement("li", {
    role: "option",
    "aria-selected": "false",
    "data-option": true
  }, "Brother"), /*#__PURE__*/React.createElement("li", {
    role: "option",
    "aria-selected": "false",
    "data-option": true
  }, "Grandchild"), /*#__PURE__*/React.createElement("li", {
    role: "option",
    "aria-selected": "false",
    "data-option": true
  }, "Father")))));
};

export { SearchableDropdown, SearchableDropdownLibrary as supportingFunction };
