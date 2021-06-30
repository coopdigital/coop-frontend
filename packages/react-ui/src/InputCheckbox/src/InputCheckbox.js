import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const InputCheckbox = ({
  id,
  name,
  className,
  label,
  checked,
  value,
  disabled,
  ...props
}) => {
  const classes = classNames("coop-form__field coop-form__checkbox", [
    className,
  ]);

  const tagAttributes = {
    id,
    name,
    value,
    label,
    disabled,
    type: "checkbox",
    className: classes,
    checked,
    ...props,
  };

  return (
    <div className="coop-form__choice">
      <input {...tagAttributes} />
      <label className="coop-form__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

InputCheckbox.defaultProps = {
  disabled: false,
  className: null,
  checked: null,
  value: "",
};

InputCheckbox.propTypes = {
  /** id - is required can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  id: PropTypes.string.isRequired,
  /** name - is required can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  name: PropTypes.string.isRequired,
  /** label - all form inout require a label to describe the what the input does or wat effect it has on page. */
  label: PropTypes.string.isRequired,
  /** value -  The value contained in the checkbox, needs to be either string or number. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** className - optional and is used to add more styling to the checkbox if required in your project. */
  className: PropTypes.string,
  /** checked - is the checkbox checked or not by default */
  checked: PropTypes.bool,
  /** disabled - is the checkbox disabled by default */
  disabled: PropTypes.bool,
};

export default InputCheckbox;
