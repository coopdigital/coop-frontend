# CSS Foundations: Buttons
This CSS module provides helper and utility classes that allow you to apply Co-op's buttons to your frontend applications and websites.

## Installation
Install via NPM:
```bash
$ npm install @coopdigital/foundations-buttons --save
```

## Usage
You can include `@coopdigital/foundations-buttons` in your project by referencing it from your existing CSS via `@import` statement, i.e.:
```css
@import "node_modules/@coopdigital/foundations-colors/dist/buttons.css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly like so:
```css
@import "node_modules/@coopdigital/foundations-colors/src/buttons.pcss";
```

If you use a `postcss-import` plugin, it gets even easier:
```css
@import "@coopdigital/foundations-buttons";
```

HTML can be copied from the example on the design system website or can be found in the `/dist` folder in the package.

## Development
For information on how to develop this package see the [developing foundations and components forthe design system documentation](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md).

## Changelog

### 2.3.0 (Fix release)
Fixes
We’ve made fixes to the buttons

Fix hover background colour not passing colour contrast guidelines.

_Previous releases did not have notes_
