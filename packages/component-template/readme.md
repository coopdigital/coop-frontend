# Component Template
This repository serves as a template for creating new components for the Co-op Front-end.

---

# `component-[name]`
Your brief description of your component or module.

## Installation
Install via `npm`:
```bash
$ npm install @coopdigital/component-[name] --save
```

## Usage
You can include `component-[name]` in your project by referencing it from your existing CSS via `@import` statement, i.e.:
```css
@import "node_modules/@coopdigital/component-[name]/dist/[name].css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly like so:
```css
@import "node_modules/@coopdigital/component-[name]/src/[name].css";
```

If you use a `postcss-import` plugin, use:
```css
@import "@coopdigital/component-[name]";
```
