import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Alert = ({ type, heading, link, children, testId }) => {
  const { href, text } = link;

  const classes = classNames("coop-c-notification", [
    type === "warn" && "coop-c-notification--alert",
    type === "error" && "coop-c-notification--error",
    type === "success" && "coop-c-notification--success",
  ]);

  const tagAttributes = {
    className: classes,
    role: type === "warn" || type === "error" ? "alert" : "status",
  };

  return (
    <div
      data-testid={testId}
      className={tagAttributes.className}
      role={tagAttributes.role}
    >
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
  type: PropTypes.oneOf(["info", "warn", "error", "success"]),
  heading: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  children: PropTypes.node,
  testId: PropTypes.string,
};

export default Alert;
