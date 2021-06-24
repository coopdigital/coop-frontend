import React, { forwardRef } from "react";
import PropTypes from "prop-types";
// import { useRadioContext } from "../../InputRadioGroup/src/InputRadioGroupContext";
import classNames from "../../utils/classNames";

const InputRadio = forwardRef(
  (
    {
      id,
      name,
      className,
      label,
      checked,
      value,
      disabled,
      onChange,
      ...props
    },
    ref
  ) => {
    const classes = classNames("coop-form__field coop-form__radio", [
      className,
    ]);

    const tagAttributes = {
      id,
      name,
      value,
      disabled,
      type: "radio",
      className: classes,
      ref,
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
  }
);

InputRadio.defaultProps = {
  disabled: false,
  className: null,
  checked: null,
  onChange: null,
  value: "",
};

InputRadio.propTypes = {
  /** id - (required) can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  id: PropTypes.string.isRequired,
  /** name - (required) can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  name: PropTypes.string.isRequired,
  /** label - (required) all form inputs require a label to describe the what the input does or wat effect it has on page. */
  label: PropTypes.string.isRequired,
  /** value - The value contained in the checkbox, needs to be either string or number.*/
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** className - optional and is used to add more styling to the checkbox if required in your project.*/
  className: PropTypes.string,
  /** checked - is the checkbox checked or not by default */
  checked: PropTypes.bool,
  /** disabled - is the checkbox disabled by default */
  disabled: PropTypes.bool,
  /** onChange - an event function that triggers when the input state changes */
  onChange: PropTypes.func,
};

export default InputRadio;
