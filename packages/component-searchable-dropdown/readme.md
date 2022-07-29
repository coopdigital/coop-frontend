# Searchable Dropdown

# `component-searchable-dropdown`

This renders a searchable dropdown

## Installation

Install via `npm` or `yarn`:

```bash
npm install @coopdigital/component-searchable-dropdown
```

```bash
yarn add @coopdigital/component-searchable-dropdown
```

## Importing

```css
@import "@coopdigital/foundations/dist/vars/vars.css";
@import "@coopdigital/foundations/dist/foundations.css";
@import "@coopdigital/foundations-forms/dist/forms.css";
@import "@coopdigital/component-searchable-dropdown/dist/styles.css";
```

```js
import { SearchableDropdown } from "@coopdigital/component-searchable-dropdown";
```

## Usage

```js
<SearchableDropdown
  label="My favourite animal is a..."
  id="animals"
  options={["Cat", "Dog", "Frog", "Panda", "Sloth"]}
  placeholder="Select option"
/>
```

## License

Copyright (c) 2022 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).
