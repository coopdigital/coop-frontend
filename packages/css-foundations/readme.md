# Co-op CSS Foundations
Co-op CSS Foundations contains all the core CSS styles needed to build Co-op branded digital content. It brings together all the packages projects will need in one place. Components and custom styles should be included or written separately and decided on a project by project basis. 

The foundations set the basic Co-op look and feel - they should be included in all Co-op services.

## Installation
Install via NPM:
```bash
$ npm install @coopdigital/css-foundations --save
```

## Usage
You can include CSS Foundations in your project by referencing it from your existing CSS via `@import` statement, i.e.:
```css
@import "node_modules/@coopdigital/css-foundations/dist/foundations.css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly like so:
```css
@import "node_modules/@coopdigital/css-foundations/src/foundations.pcss";
```

If you use a `postcss-import` plugin, it gets even easier:
```css
@import "@coopdigital/css-foundations";
```

## Examples
Here's a bunch of examples, showing how you can integrate this CSS module in your project, based on most popular stacks of project. You can either use a post-processed and pre-built CSS form the `dist` directory, ot use PostCSS sources from the `src` dir.

The latter have certain dependencies, which should be consumed by your frontend toolkit to postprocess the CSS correctly.

### Vue.js
In Vue, you can just reference it from a global component like so:
```css
<style>
/* Import PostCSS source */
@import "~@coopdigital/css-foundations/src/foundations.pcss";
/* Import postprocessed distributable CSS */
@import "~@coopdigital/css-foundations/dist/foundations.css";
</style>
```

## Development
CSS Foundations follows a modular architecture and as such is composed out of several CSS Modules. You are free to use either individual modules or load the entire framework into your project.

### Modules
- [X] normalize [`necolas/normalize.css`](https://github.com/necolas/normalize.css)
- [x] Variables [`@coopdigital/foundations-vars`](https://github.com/coopdigital/foundations-vars)
- [x] Global [`@coopdigital/foundations-global`](https://github.com/coopdigital/foundations-global)
- [x] Typography [`@coopdigital/foundations-typography`](https://github.com/coopdigital/foundations-typography)
- [x] Colours [`@coopdigital/foundations-colors`](https://github.com/coopdigital/foundations-colors)
- [x] Buttons [`@coopdigital/foundations-buttons`](https://github.com/coopdigital/foundations-buttons)
- [x] Forms [`@coopdigital/foundations-forms`](https://github.com/coopdigital/foundations-forms)
- [x] Tables [`@coopdigital/foundations-tables`](https://github.com/coopdigital/foundations-tables)
- [x] Grid (Flexbox and legacy) [`@coopdigital/foundations-grid`](https://github.com/coopdigital/foundations-grid)
- [x] Layout (spacing and utility helpers) [`@coopdigital/foundations-layout`](https://github.com/coopdigital/foundations-layout)

### How to develop?
This package only serves as a master package for all individual CSS modules. Development should be done within individual package repositories, following general guidelines.

## Changelog

### 6.2.1 (Feature release)
Feature
Foundations-global - We’ve added a padding class so logo meets minimum tap target size.

_Previous releases did not have notes_


## License
Copyright (c) 2021 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).

 