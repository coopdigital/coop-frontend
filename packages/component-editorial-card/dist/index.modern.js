import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable func-names */

/* eslint-disable no-multi-assign */
const $ = document.querySelector.bind(document);
document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(elem => {
    elem.on(name, fn);
  });
};

function validatePostcode(getPostcode) {
  const validator = new RegExp(/\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/i);
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

function submitPostcode(e) {
  e.preventDefault();
  const postcodeInput = $('input#coop-c-postcode__search');
  const check = validatePostcode(postcodeInput.value);

  if (check) {
    window.location.replace(`${window.SHOP_URL}?postcode=${postcodeInput.value}&utm_source=${postcodeInput.dataset.utmSource}&utm_medium=${postcodeInput.dataset.utmMedium}&utm_campaign=${postcodeInput.dataset.utmCampaign}`);
  } else {
    $('div.coop-c-postcode').classList.add('error');
    const selector = 'coop-c-postcode';
    const parentElement = '.coop-c-postcode__inner';
    showError(selector, '<span class="coop-u-red-mid">Please enter a valid postcode format</span> <br /> For example  M4 4BE', parentElement);
  }
}

function postcode(form) {
  if (!form) {
    return;
  }

  form.addEventListener('submit', submitPostcode);
}

const EditorialCard = ({
  title,
  text,
  link,
  type,
  testId
}) => {
  const tagAttributes = {
    className: "coop coop-c-editorialcard coop-c-editorialcard--horizontal",
    role: type === "warn" || type === "error" ? "alert" : "status"
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": testId,
    className: tagAttributes.className,
    role: tagAttributes.role
  }, /*#__PURE__*/React.createElement("div", {
    className: "coop-c-editorialcard__inner "
  }, /*#__PURE__*/React.createElement("h3", {
    className: "coop-c-editorialcard__title coop-c-notification__heading"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "coop-c-notification__p"
  }, link ? /*#__PURE__*/React.createElement("a", {
    href: link,
    className: "coop-c-notification__link"
  }, text) : text)));
};

EditorialCard.defaultProps = {
  type: "info"
};
EditorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  type: PropTypes.oneOf(["info", "warn", "error", "success"]),
  testId: PropTypes.string
};

export { EditorialCard, postcode };
//# sourceMappingURL=index.modern.js.map
