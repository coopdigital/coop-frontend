import React from "react";
import PropTypes from "prop-types";
// import '../css/EditorialCard.pcss';

const EditorialCard = ({ title, text, link, type, testId }) => {
  const tagAttributes = {
    className: "coop coop-c-editorialcard coop-c-editorialcard--horizontal",
    role: type === "warn" || type === "error" ? "alert" : "status",
  };

  return (
    <div
      data-testid={testId}
      className={tagAttributes.className}
      role={tagAttributes.role}
    >
      <div className="coop-c-editorialcard__inner ">
        <h3 className="coop-c-editorialcard__title coop-c-notification__heading">{title}</h3>
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
