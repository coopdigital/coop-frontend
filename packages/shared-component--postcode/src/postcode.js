import { $ } from './modules/bling';
import { validatePostcode, showError } from './modules/helpers';

function postcode(form) {
  if (!form) { return }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const getPostcode = $('input#coop-c-postcode__search').value;
    const check = validatePostcode(getPostcode)
    if (check) {
      window.location.replace(window.SHOP_URL + "?postcode=" + getPostcode + "&utm_source=Coop&utm_medium=referral&utm_campaign=PostcodeLookup");
    } else {
      $('div.coop-c-postcode').classList.add('error');
      const selector = 'coop-c-postcode';
      const parentElement = '.coop-c-postcode__form';
      showError(selector, '<span class="coop-u-red-mid">Please enter a valid postcode format</span> <br /> For example  M4 4BE', parentElement);
    }
  })
}
export default postcode;