import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Alert = ({ type, heading, link, children, ...props }) => {
  const { href, text } = link;

  const classes = classNames("coop-c-notification", [
    type === "warn" && "coop-c-notification--alert",
    type === "error" && "coop-c-notification--error",
  ]);

  const role = function (type) {
    if (type === "warn" || type == "error") {
      return "alert";
    } else {
      return "status";
    }
  };

  const tagAttributes = {
    className: classes,
    role: role(type),
    ...props,
  };

  return (
    <div {...tagAttributes}>
      <h3 className="coop-c-notification__heading">{heading}</h3>
      <p className="coop-c-notification__p">
        {href && (
          <a href={href} className="coop-c-notification__link">
            {text}
          </a>
        )}
      </p>
      {children && <p className="coop-c-notification__p">{children}</p>}
    </div>
  );
};

Alert.defaultProps = {
  type: "info",
  link: {
    href: "",
    text: "",
  },
  children: null,
};

Alert.propTypes = {
  type: PropTypes.oneOf(["info", "warn", "error"]),
  heading: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default Alert;
