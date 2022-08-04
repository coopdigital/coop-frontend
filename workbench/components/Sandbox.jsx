import { EditorialCard } from 'components/EditorialCard';
import React, { useState } from 'react';

export function Sandbox({ config, children }) {
  /*
            {config} -
            {children}
    */

  const values = {};

  config.forEach((field) => {
    values[field.name] = field.value;
  });

  const [data, setData] = useState(values);
  const handleChange = (event) => {
    let value;
    const { prop, proptype } = event.target.dataset;

    if (proptype === 'checkbox') {
      value = event.target.checked;
    }
    if (proptype === 'text') {
      value = event.target.value;
    }
    if (proptype === 'array') {
      value = event.target.value.split(',');
    }

    setData({ ...data, [prop]: value });
  };

  return (
    <div className="wb-sandbox">
      <div className="wb-sandbox-component">{React.cloneElement(children, { ...data })}</div>
      <div className="wb-sandbox-controls">
        <h3>Controls</h3>
        {config.map((field) => {
          // const additionalClass = field.type === 'checkbox' ? 'coop-form__choice' : '';
          const inputConditionalProps = {
            defaultChecked: field.type === 'checkbox' && field.value === true ? true : null,
            value: field.type === 'text' ? data[field.name] : '',
          };
          return (
            <div className={'coop-form__row'} key={field.name}>
              <label className="coop-form__label" htmlFor={field.name}>
                {field.name}
              </label>
              <input
                type={field.type}
                id={field.name}
                data-prop={field.name}
                data-proptype={field.proptype || field.type || 'text'}
                onInput={handleChange}
                // onChange={handleChange}
                // value={field.value}
                {...inputConditionalProps}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
