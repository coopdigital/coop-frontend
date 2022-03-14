import { useRef, useEffect } from 'react';
import ComboboxLibrary from './ComboboxLibrary.js';

const Combobox = () => {
  const comboboxRef = useRef();

  useEffect(() => {
    new ComboboxLibrary(comboboxRef.current).setup();
  }, []);

  return (
    <div ref={comboboxRef}>
      <div data-combobox>
        <label htmlor="combobox">How you know them</label>
        <input
          name="combobox"
          className="coop-form__input"
          type="text"
          placeholder="Select option"
          data-input
          data-testid="combobox-input"
        />
        <div
          style={{ display: 'none' }}
          data-dropdown
          aria-expanded="false"
          data-testid="combobox-dropdown"
        >
          <ul data-list>
            <li data-option>Partner</li>
            <li data-option>Spouse</li>
            <li data-option>Parent</li>
            <li data-option>Child</li>
            <li data-option>Brother</li>
            <li data-option>Grandchild</li>
            <li data-option>Father</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Combobox;
