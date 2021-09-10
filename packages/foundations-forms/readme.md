# CSS Foundations: Forms

CSS Foundations module containing style declarations for styling various form fields.

## Installation

Install via `npm` or Yarn:

```bash
$ npm install @coopdigital/foundations-forms --save
# OR
$ yarn add @coopdigital/foundations-forms
```

## Usage

### CSS

You can include `foundations-forms` in your project by referencing it from your existing CSS via `@import` statement, i.e.:

```css
@import "node_modules/@coopdigital/foundations-forms/dist/forms.css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly like so:

```css
@import "node_modules/@coopdigital/foundations-forms/src/forms.pcss";
```

If you use a `postcss-import` plugin, it gets even easier:

```css
@import "@coopdigital/foundations-forms";
```

### Validation

We have a built in validation library that can be used across your frontend. It is built and compiled into just javascript so using it within a framework context is possible but requires additional work. A React example is in-progress.

### Validation summary

Add the validation summary. See the [example page](https://coop-design-system.herokuapp.com/pattern-library/foundations/validation.html)

```js
import ValidationSummary from "@coopdigital/foundations-forms/dist/validation/summary";

const customClickHandler = (e) => {
  console.log(e);
}

const summary = new ValidationSummary('validtion-summary', {
  heading = 'There’s a problem',
  message = 'Check the form. You must:',
  errorOnClick = customClickHandler,
});
```

`heading`

- Default: "There’s a problem"
- Overwrite the h2 of the validation component

`message`

- Default: "Check the form. You must:"
- Overwrite the message

`errorOnClick`

- Default: [errorClickHandler](https://github.com/coopdigital/coop-frontend/blob/master/packages/foundations-forms/src/validation/summary/handlers.mjs)
- Supply your own handler for when the validation is run. Warning, this will override the entire handler so you will have to handle everything.

Use the validation summary component from the design system and ensure the id matches what you provide to ValidationSummary.

```html
<div
  id="validtion-summary"
  className="coop-c-message coop-c-message--error"
  tabindex="-1"
  role="alert"
  hidden
/>
```

### Validate a fields

```js
import { validate } from "@coopdigital/foundations-forms/dist/validation";

const fullName = document.getElementById("validation-demo-name");

validate(fullName, {
  required: "Enter your full name",
  invalid: "Enter a valid full name",
});
```

`field`

- Required
- Provide the element of the input you want to validate

`required`

- Provide the error message to show when that field is required.
- Ignore to leave field optional

`invalid`

- Provide the error message to show when the field is invalid

### Example

```js
import {
  reset as buttonReset,
  loading as buttonLoading,
} from "@coopdigital/foundations-buttons/src/buttons.mjs";
import { validate } from "../validation/index.mjs";
import ValidationSummary from "../validation/summary/index.mjs";

// Form elements
const form = document.getElementById("validation-demo");
const fullName = document.getElementById("validation-demo-name");
const emailAddress = document.getElementById("validation-demo-email");
const button = form.querySelector("button");

// Validation summary
const summary = new ValidationSummary("validation-demo-box");

// Validate on submit
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Prevent double submit
  if (form.dataset.busy) {
    return;
  }

  const errors = [];

  // Full name, validate
  validate(fullName, {
    required: "Enter your full name",
    invalid: "Enter a valid full name",
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
    required: "Enter your email address",
    invalid: "Enter a valid email address",
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

    // Pretend to submit
    form.dataset.busy = true;
    await buttonLoading(button);

    // Reset button
    setTimeout(async () => {
      await buttonReset(button);
      delete form.dataset.busy;
    }, 3000);
  }
});
```

## License

Copyright (c) 2021 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).
