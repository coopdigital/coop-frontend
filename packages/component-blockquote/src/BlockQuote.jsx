import React from 'react';
import PropTypes from 'prop-types';
import './blockquote.pcss';

const BlockQuote = ({ className, citation, children }) => (
  <blockquote>
    <p className={className}>{children}</p>
    <cite>{citation}</cite>
  </blockquote>
);

BlockQuote.defaultProps = {
  className: null,
  citation: null,
  children: null,
};

BlockQuote.propTypes = {
  className: PropTypes.string,
  citation: PropTypes.string,
  children: PropTypes.node,
};

export default BlockQuote;
