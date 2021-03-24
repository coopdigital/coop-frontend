import React from 'react';
import PropTypes from 'prop-types';
import './blockquote.pcss';

const Blockquote = ({ citation, quote, quoteLarge }) => (
  <blockquote className="coop-t-blockquote">
    <p className={quoteLarge ? 'coop-t-blockquote__quote coop-t-blockquote__quote--large' : 'coop-t-blockquote__quote'}>{quote}</p>
    <cite className="coop-t-blockquote__cite">{citation}</cite>
  </blockquote>
);

Blockquote.defaultProps = {
  quoteLarge: false,
  citation: null,
  quote: null,
};

Blockquote.propTypes = {
  quoteLarge: PropTypes.bool,
  citation: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Blockquote;
