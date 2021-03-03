import React from 'react';
import PropTypes from 'prop-types';
import './component.pcss';

// Example react component with 3 props, using prop-types for type management.
const Component = ({ className, heading, content }) => (
  <article>
    <h3 className={className}>{heading}</h3>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </article>
);

Component.defaultProps = {
  className: null,
  heading: null,
  content: null,
};

Component.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.node,
};

export default Component;
