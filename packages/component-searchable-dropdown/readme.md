# Searchable Dropdown

A Co-op styled searchable dropdown (aka combobox) React component built using [Downshift](https://www.downshift-js.com/).

## Installation

Install via `npm` or `yarn`:

```bash
npm install @coopdigital/component-searchable-dropdown

yarn add @coopdigital/component-searchable-dropdown
```

## Prerequisites

> You must have the Co-op foundations and foundations-forms css packages installed in your project. You will also need React 17 or higher.

```css
@import "@coopdigital/foundations/dist/vars/vars.css";
@import "@coopdigital/foundations/dist/foundations.css";
@import "@coopdigital/foundations-forms/dist/forms.css";
```

## Importing

```css
@import "@coopdigital/component-searchable-dropdown/dist/styles.css";
```

```js
import { SearchableDropdown } from "@coopdigital/component-searchable-dropdown";
```

## Basic Usage

```js
<SearchableDropdown
  label="My favourite animal is a..."
  id="animals"
  options={["Cat", "Dog", "Frog", "Panda", "Sloth"]}
/>
```

## Required props

These props are required for the component to render:

| prop      | type     | description                               |
| --------- | -------- | ----------------------------------------- |
| `label`   | `string` | Text for the associated element label.    |
| `id`      | `string` | A unique identifier for the element.      |
| `options` | `array`  | Array of strings to use for option values |

## Additional props

The component can be further customised using the props below:

| prop          | type     | description                                                                                     | default             |
| ------------- | -------- | ----------------------------------------------------------------------------------------------- | ------------------- |
| `className`   | `string` | Additional class (or classes) to append to the outer coop-c-combobox element                    | -                   |
| `compact`     | `bool`   | Reduces the input font size to 1rem                                                             | false               |
| `noResults`   | `string` | String to display when no matching options are found                                            | No relevant options |
| `onSelect`    | `func`   | Callback function when an option is selected, receives the selected value as its only parameter | -                   |
| `placeholder` | `string` | Placeholder text to display when no option is selected                                          | -                   |
| `style`       | `object` | CSS object with inline styles to be added to the outer coop-c-combobox element                  | -                   |

## Kitchen sink

```js
<SearchableDropdown
  label="My favourite animal is a..."
  id="animals"
  options={["Cat", "Dog", "Frog", "Panda", "Sloth"]}
  className="additional-class another-class"
  compact
  placeholder="Select option"
  onSelect={(value) => {
    console.log(value);
  }}
  style={{ width: "300px" }}
/>
```

## License

Copyright (c) 2022 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).
