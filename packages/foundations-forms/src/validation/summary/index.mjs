import { click as errorClickHandler } from './handlers.mjs';

/**
 * Validation summary box
 */
class ValidationSummary {
  constructor(containerId, {
    heading = 'There’s a problem',
    message = 'Check the form. You must:',
    errorOnClick = errorClickHandler,
  } = {}) {
    this.heading = heading;
    this.message = message;
    this.container = document.getElementById(containerId);

    // Skip if already instantiated
    if (this.container.instance) {
      return this;
    }

    // Handle clicks on error links
    this.container.addEventListener('click', errorOnClick);

    // Auto-enable if already visible
    if (!this.container.hasAttribute('hidden')) {
      this.enable();
    }

    // Attach instance to container
    this.container.instance = this;
  }

  /**
   * Enable validation summary
   */
  enable() {
    const { container: { id } } = this;

    this.container.setAttribute('aria-labelledby', `${id}-heading`);
    this.container.removeAttribute('hidden');
    this.container.focus();
  }

  /**
   * Reset validation summary
   */
  reset() {
    this.container.setAttribute('hidden', true);
    this.container.removeAttribute('aria-labelledby');
    this.container.innerHTML = '';
  }

  /**
   * Set single error message
   */
  setError(error = '') {
    this.reset();

    const { heading, container: { id } } = this;

    this.container.appendChild(ValidationSummary.createHeading({ heading, id: `${id}-heading` }));
    this.container.appendChild(ValidationSummary.createMessage({ message: error }));

    // Enable container
    this.enable();
  }

  /**
   * Set multiple error messages
   */
  setErrors(errors = []) {
    this.reset();

    const { heading, message, container: { id } } = this;

    this.container.appendChild(ValidationSummary.createHeading({ heading, id: `${id}-heading` }));
    this.container.appendChild(ValidationSummary.createErrors({ errors, message }));

    // Enable container
    this.enable();
  }

  /**
   * Build error heading
   */
  static createHeading({ heading, id }) {
    const element = document.createElement('h2');
    element.id = id;
    element.innerHTML = heading;
    return element;
  }

  /**
   * Build message
   */
  static createMessage({ message }) {
    const element = document.createElement('p');
    element.classList.add('coop-c-message__message');
    element.innerHTML = message;
    return element;
  }

  /**
   * Build error link item
   */
  static createError({ id, message, messageHtml }) {
    const item = document.createElement('li');

    // Custom HTML or plain link?
    if (messageHtml) {
      item.innerHTML = messageHtml;
    } else {
      const error = document.createElement('a');

      // Customise link
      error.href = `#${id}`;
      error.classList.add('coop-c-message__link');
      error.innerHTML = message;

      // Add error to list item
      item.appendChild(error);
    }

    return item;
  }

  /**
   * Build error list or single message
   */
  static createErrors({ message, errors }) {
    const fragment = document.createDocumentFragment();
    const subheading = ValidationSummary.createMessage({ message });
    const list = document.createElement('ul');

    // Mark up list
    list.classList.add('coop-c-message__list');

    // Add each error
    errors.forEach((item) => list
      .appendChild(ValidationSummary.createError(item)));

    // Add subheading, error list
    fragment.appendChild(subheading);
    fragment.appendChild(list);

    return fragment;
  }
}

export default ValidationSummary;
