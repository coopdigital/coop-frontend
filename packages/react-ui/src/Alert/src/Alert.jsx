import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Alert = ({ title, text, link, type, testId }) => {
  const classes = classNames("coop-c-notification", [
    type === "warn" && "coop-c-notification--alert",
    type === "error" && "coop-c-notification--error",
    type === "success" && "coop-c-notification--success"
  ]);

  const tagAttributes = {
    className: classes,
    role: type === "warn" || type === "error" ? "alert" : "status"
  };

  return (
    <div
      data-testid={testId}
      className={tagAttributes.className}
      role={tagAttributes.role}
    >
      <h3 className="coop-c-notification__heading">{title}</h3>
      <p className="coop-c-notification__p">
        {link ? (
          <a href={link} className="coop-c-notification__link">
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </div>
  );
};

Alert.defaultProps = {
  type: "info"
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  type: PropTypes.oneOf(["info", "warn", "error", "success"]),
  testId: PropTypes.string
};

export default Alert;
