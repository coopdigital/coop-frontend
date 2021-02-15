import { validate } from '../validation/index.mjs';
import ValidationSummary from '../validation/summary/index.mjs';

// Form elements
const form = document.getElementById('validation-demo');
const fullName = document.getElementById('validation-demo-name');
const emailAddress = document.getElementById('validation-demo-email');

// Validation summary
const summary = new ValidationSummary('validation-demo-box');

// Validate on submit
form.addEventListener('submit', (event) => {
  const errors = [];

  // Full name, validate
  validate(fullName, {
    required: 'Enter your full name',
    invalid: 'Enter a valid full name',
  });

  // Full name, validation summary link
  if (fullName.validity.customError) {
    errors.push({
      id: fullName.id,
      message: fullName.validationMessage.toLowerCase(),
    });
  }

  // Email address, validate
  validate(emailAddress, {
    required: 'Enter your full name',
    invalid: 'Enter a valid full name',
  });

  // Email address, validation summary link
  if (emailAddress.validity.customError) {
    errors.push({
      id: emailAddress.id,
      message: emailAddress.validationMessage.toLowerCase(),
    });
  }

  // Show or clear errors
  if (errors.length) {
    summary.setErrors(errors);
  } else {
    summary.reset();
  }

  // Don't submit example
  event.preventDefault();
});
