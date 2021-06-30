import React from "react";
import PropTypes from "prop-types";

const InputRadioGroup = ({
  id,
  legend,
  hint,
  hasError,
  errorMsg,
  className,
  initialValue,
  value,
  children,
  ...props
}) => {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const classNames = ["coop-c-form-choice"];
  const ariaDescribedBy = [];

  if (hint) ariaDescribedBy.push(hintId);

  if (hasError) {
    classNames.push("coop-form__invalid");
    ariaDescribedBy.push(errorId);
  }

  classNames.push(className);

  return (
    <div className="coop-form__row">
      <fieldset
        className={classNames.join(" ")}
        aria-describedby={ariaDescribedBy && ariaDescribedBy.join(" ")}
        {...props}
      >
        <legend className="coop-form__legend coop-c-form-choice__legend">
          {legend}
        </legend>
        {hint && (
          <p id={`${id}-hint`} className="coop-form__hint">
            {hint}
          </p>
        )}
        {hasError && (
          <p id={`${id}-error`} className="coop-form__error">
            {errorMsg}
          </p>
        )}
        {children}
      </fieldset>
    </div>
  );
};

export default InputRadioGroup;

InputRadioGroup.defaultProps = {
  hasError: false,
  hint: null,
  errorMsg: null,
  children: null,
  className: null,
  initialValue: null,
  value: null,
};

InputRadioGroup.propTypes = {
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  hint: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  initialValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
