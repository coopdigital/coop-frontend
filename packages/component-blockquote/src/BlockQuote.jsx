import React from 'react';
import PropTypes from 'prop-types';
import './blockquote.pcss';

const BlockQuote = ({ className, citation, quote }) => (
  <blockquote>
    <p className={className}>{quote}</p>
    <cite>{citation}</cite>
  </blockquote>
);

BlockQuote.defaultProps = {
  className: null,
  citation: null,
  quote: null,
};

BlockQuote.propTypes = {
  className: PropTypes.string,
  citation: PropTypes.string,
  quote: PropTypes.string,
};

export default BlockQuote;
