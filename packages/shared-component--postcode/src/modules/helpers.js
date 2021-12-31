const { $ } = require('./bling.js');

function validatePostcode(getPostcode) {
  const validator = new RegExp(
    /\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/i,
  );
  const valid = validator.test(getPostcode);
  return valid;
}

function showError(selector, message, parentElement) {
  const errorMessageClass = `${selector}__error`;
  const $errorMessageSelector = $(`.${errorMessageClass}`);
  if ($errorMessageSelector) {
    $errorMessageSelector.innerHTML = message;
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add(errorMessageClass);
    errorMessage.setAttribute('role', 'alert');
    errorMessage.innerHTML = message;
    $(parentElement).appendChild(errorMessage);
  }
}

module.exports = {
  validatePostcode,
  showError,
};
