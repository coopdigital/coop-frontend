import React, { useState } from 'react';

export default function Sandbox({ config, children }) {
  /*
            {config} - 
            {children}
    */

  const defaults = {};
  const fields = [];

  config.forEach((field) => {
    defaults[field.name] = field.default;
    fields.push(field.name);
  });

  const [data, setData] = useState(defaults);
  console.log(data, fields);
  const handleChange = (event) => {
    let value;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    const { prop } = event.target.dataset;
    setData({ ...data, [prop]: value });
  };

  return (
    <div className="wb-sandbox">
      <div className="wb-sandbox-component">{React.cloneElement(children, { ...data })}</div>
      <div className="wb-sandbox-controls">
        <h3>Toggles</h3>
        {config.map((field) => {
          //const additionalClass = field.type === 'checkbox' ? 'coop-form__choice' : '';
          return (
            <div className={`coop-u-padding-b-16 coop-form__row`} key={field.name}>
              <label className="coop-form__label" htmlFor={field.name}>
                {field.name}
              </label>
              <input
                type={field.type}
                id={field.name}
                value={data[field.name]}
                data-prop={field.name}
                onInput={handleChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
