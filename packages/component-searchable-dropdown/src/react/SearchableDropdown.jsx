import React, { useRef, useEffect } from "react";
import SearchableDropdownLibrary from "../lib/SearchableDropdownLibrary.js";

const SearchableDropdown = () => {
  const comboboxRef = useRef();

  useEffect(() => {
    new SearchableDropdownLibrary(comboboxRef.current).setup();
  }, []);

  return (
    <div ref={comboboxRef}>
      <div data-combobox>
        <label htmlFor="combobox">How you know them</label>
        <input
          name="combobox"
          className="coop-form__input"
          type="text"
          placeholder="Select option"
          data-input
          data-testid="combobox-input"
          role="combobox"
          aria-controls="comboboxvalues"
          aria-autocomplete="list"
          aria-expanded="false"
        />
        <div
          style={{ display: "none" }}
          data-dropdown
          data-testid="combobox-dropdown"
        >
          <ul id="comboboxvalues" role="listbox" data-list>
            {/* These valuse would be mapped from a data prop */}
            <li role="option" aria-selected="false" data-option>
              Partner
            </li>
            <li role="option" aria-selected="false" data-option>
              Spouse
            </li>
            <li role="option" aria-selected="false" data-option>
              Parent
            </li>
            <li role="option" aria-selected="false" data-option>
              Child
            </li>
            <li role="option" aria-selected="false" data-option>
              Brother
            </li>
            <li role="option" aria-selected="false" data-option>
              Grandchild
            </li>
            <li role="option" aria-selected="false" data-option>
              Father
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchableDropdown;
