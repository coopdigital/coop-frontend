# component-skipnav
Skip navigation links to create efficient access for users who navigate using a keyboard.

## Installation
Install with NPM:
```bash
$ npm install @coopdigital/component-skipnav --save
```

## Usage
You can include `component-skipnav` in your project by referencing it from your existing CSS via `@import` statement, i.e.:
```css
@import "node_modules/@coopdigital/component-skipnav/dist/skipnav.css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly like so:
```css
@import "node_modules/@coopdigital/component-skipnav/src/skipnav.pcss";
```

If you use a `postcss-import` plugin, it gets even easier:
```css
@import "@coopdigital/component-skipnav";
```
HTML can be copied from the example on the design system website or can be found in the `/dist` folder in the package.

## Development
For information on how to develop this package see the [developing foundations and components forthe design system documentation](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md).

## Changelog

### 2.2.0 (Fix release)
Fixes
We’ve made fixes the skip navigation.

Fix background colour and hover not passing colour contrast guidelines.

_Previous releases did not have notes_


## License
Copyright (c) 2021 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).

