# Co-op Foundations: Global
Styles available in the global scope of projects. It includes the styles for the Co-op logo.

## How to use
1. Install via NPM:
  ```bash
  $ npm install @coopdigital/foundations-global --save
  ```
2. Add CSS module to your application via a most appropriate method. This will entirely depend on your application and how you are currently loading CSS modules within it.

## Usage
You can include `@coopdigital/foundations-colors` in your project by referencing it from your existing CSS via `@import` statement, i.e.:
```css
@import "node_modules/@coopdigital/foundations-global/dist/global.css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly like so:
```css
@import "node_modules/@coopdigital/foundations-global/src/global.pcss";
```

If you use a `postcss-import` plugin, it gets even easier:
```css
@import "@coopdigital/foundations-global";
```

HTML can be copied from the example on the design system website or can be found in the `/dist` folder in the package.

## Development
For information on how to develop this package see the [developing foundations and components forthe design system documentation](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md).

## Changelog

### 3.2.0 (Feature release)
Feature
We’ve added a padding class so logo meets minimum tap target size.

_Previous releases did not have notes_



## License
Copyright (c) 2021 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).

