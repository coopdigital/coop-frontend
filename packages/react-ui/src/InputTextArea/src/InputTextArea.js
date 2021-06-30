import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const InputTextArea = ({
  id,
  name,
  cols,
  rows,
  className,
  label,
  hint,
  hasError,
  errorMsg,
  disabled,
  ...props
}) => {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const ariaDescribedBy = [];

  const classes = classNames("coop-form__field coop-form__textarea", [
    hasError && "coop-form__invalid",
    className,
  ]);

  if (hint) ariaDescribedBy.push(hintId);

  if (hasError) {
    ariaDescribedBy.push(errorId);
  }

  return (
    <div className="coop-form__row">
      {label && (
        <label htmlFor={id} className="coop-form__label">
          {label}
        </label>
      )}
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
      <textarea
        cols={cols}
        rows={rows}
        name={name}
        id={id}
        className={classes}
        aria-describedby={ariaDescribedBy && ariaDescribedBy.join(" ")}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

InputTextArea.defaultProps = {
  cols: 30,
  rows: 4,
  className: null,
  label: null,
  hint: null,
  hasError: false,
  errorMsg: null,
  disabled: false,
};

InputTextArea.propTypes = {
  /** id - (required) can be used for identifying the specific form element for labels and targeting values for form submission. */
  id: PropTypes.string.isRequired,
  /** name - (required) can be used for identifying the specific form element for labels and targeting values for form submission. */
  name: PropTypes.string.isRequired,
  /** cols - number value to set number of cols on a textarea input. */
  cols: PropTypes.number,
  /** rows -  number value to set number of rows on a textarea input. */
  rows: PropTypes.number,
  /** className - optional and is used to add more styling to the input if required in your project.*/
  className: PropTypes.string,
  /** label - It's helpful fot all form inputs require a label to describe the what the input does. */
  label: PropTypes.string,
  /** hint - (optional) can be used to help guide users in filling in areas of a form. */
  hint: PropTypes.string,
  /** hasError - (optional/state managed?) this would trigger on the element when an error state occurs.
   * Requires state management to set this */
  hasError: PropTypes.bool,
  /** errorMsg - (optional) shows the user an error message when an error occurs in filling out a form or form processing. */
  errorMsg: PropTypes.string,
  /** disabled - (optional) is the input disabled by default or not */
  disabled: PropTypes.bool,
};

export default InputTextArea;
