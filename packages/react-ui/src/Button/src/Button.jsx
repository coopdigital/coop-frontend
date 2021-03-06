import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Button = ({
  className,
  variant,
  type,
  size,
  disabled,
  isLoading,
  children,
  handleClick,
  ...props
}) => {
  const classes = classNames("coop-btn", [
    variant && `coop-btn--${variant}`,
    isLoading && "coop-btn--loading",
    size === "small" && "coop-btn--small",
  ]);

  const tagAttributes = {
    className: classes,
    type,
    ...props,
  };

  return (
    <button {...tagAttributes} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  size: "medium",
  disabled: false,
  isLoading: false,
  className: null,
  variant: null,
  children: null,
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "white", "grey"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["small", "medium"]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

export default Button;
