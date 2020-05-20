# Component Template
This repository is a template for creating new components for the Co-op design system.

---

# `component-[name]`
Your brief description of your component.

## Installation
Install via `npm`:
```bash
$ npm install @coopdigital/component-[name] --save
```

## Usage
You can include `component-[name]` in your project by referencing it from your existing CSS via `@import` statement:
```css
@import "node_modules/@coopdigital/component-[name]/dist/[name].css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly:
```css
@import "node_modules/@coopdigital/component-[name]/src/[name].css";
```

If you use a `postcss-import` plugin:
```css
@import "@coopdigital/component-[name]";
```
