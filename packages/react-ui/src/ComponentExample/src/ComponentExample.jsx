/**
 * @jest-environment jsdom
 */
import React from "react";
import PropTypes from "prop-types";

// Example react component with 2 props, using prop-types for type management.
const ComponentExample = ({ className, heading, content }) => (
  <article>
    <h3>{heading}</h3>
    <p>{content}</p>
  </article>
);

ComponentExample.defaultProps = {
  heading: null,
  content: null,
};

ComponentExample.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
};

export default ComponentExample;
