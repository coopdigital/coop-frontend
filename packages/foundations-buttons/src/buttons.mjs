/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

/**
 * Reset button to default state
 */
export const reset = async (button) => {
  const buttonText = button.querySelector('.coop-btn__text:not([role])');
  const buttonTexts = button.querySelectorAll('.coop-btn__text');

  // Remove loading spinner
  button.classList.remove('coop-btn--loading');

  // Check for loading text
  if (buttonText && buttonTexts.length > 0) {
    clearTimeout(button.timerAnnounce);

    // Reset but suppress button text announcement
    button.setAttribute('aria-live', 'assertive');
    button.setAttribute('aria-relevant', 'additions');

    // Hide all button text
    buttonTexts.forEach((element) => element
      .setAttribute('hidden', true));

    // Show default button text
    buttonText.removeAttribute('hidden');

    // Prepare for next announcement
    return new Promise((resolve) => setTimeout(() => {
      button.setAttribute('aria-relevant', 'additions text');
      button.setAttribute('aria-atomic', 'true');
      resolve();
    }, 300));
  }
};

/**
 * Add loading state to button
 */
export const loading = async (button) => {
  const buttonText = button.querySelector('.coop-btn__text[role="status"]');
  const buttonTexts = button.querySelectorAll('.coop-btn__text');

  // Add loading spinner
  button.classList.add('coop-btn--loading');

  // Check for loading text
  if (buttonText && buttonTexts.length > 0) {
    buttonTexts.forEach((element) => element
      .setAttribute('hidden', true));

    // Show button loading text
    buttonText.removeAttribute('hidden');

    // Suppress next announcement
    return new Promise((resolve) => setTimeout(() => {
      button.setAttribute('aria-live', 'off');
      button.setAttribute('aria-atomic', 'false');
      resolve();
    }, 300));
  }
};
