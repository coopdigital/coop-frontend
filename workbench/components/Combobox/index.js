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
        <DropDown />
      </div>
    </div>
  );
};

export default Combobox;
