import { $ } from './modules/bling';
import { validatePostcode, showError } from './modules/helpers';

function submitPostcode(e) {
  e.preventDefault();
  const postcodeInput = $('input#coop-c-postcode__search');
  const check = validatePostcode(postcodeInput.value);
  if (check) {
    window.location.replace(
      `${window.SHOP_URL}?postcode=${postcodeInput.value}&utm_source=${postcodeInput.dataset.utmSource}&utm_medium=${postcodeInput.dataset.utmMedium}&utm_campaign=${postcodeInput.dataset.utmCampaign}`
    );
  } else {
    $('div.coop-c-postcode').classList.add('error');
    const selector = 'coop-c-postcode';
    const parentElement = '.coop-c-postcode__inner';
    showError(
      selector,
      '<span class="coop-u-red-mid">Please enter a valid postcode format</span> <br /> For example  M4 4BE',
      parentElement
    );
  }
}

function postcode(form) {
  if (!form) {
    return;
  }
  form.addEventListener('submit', submitPostcode);
}

export default postcode;
