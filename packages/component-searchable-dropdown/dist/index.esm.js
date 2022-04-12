import React from 'react';

var Component = function Component() {
  return /*#__PURE__*/React.createElement("div", {
    className: "coop-c-component"
  }, "Example HTML");
};

var supportingFunction = function supportingFunction() {
  // eslint-disable-next-line no-console
  console.log('Kaboom');
};

export { Component, supportingFunction };
