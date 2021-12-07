import React from "react";
import PropTypes from "prop-types";

const EditorialCard = ({ title, text, link, type, testId }) => {
  const tagAttributes = {
    className: "coop",
    role: type === "warn" || type === "error" ? "alert" : "status",
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

EditorialCard.defaultProps = {
  type: "info",
};

EditorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  type: PropTypes.oneOf(["info", "warn", "error", "success"]),
  testId: PropTypes.string,
};

export default EditorialCard;
