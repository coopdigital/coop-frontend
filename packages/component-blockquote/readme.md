# Component Blockquote
This repository is a template for creating new components for the Co-op design system.

---

# `component-blockquote`
Your brief description of your component.

## Installation
Install via `npm`:
```bash
$ npm install @coopdigital/component-blockquote --save
```

## Usage

### React
You can include this react component in your project by importing it via the `import` statement.
```jsx
import Blockquote from '@coopdigital/component-blockquote';
```

If you want to use the JSX template for compiling in your own project you can include the component with the following `import` statement

```jsx
import Blockquote from 'node_modules/@coopdigital/component-blockquote/src/Blockquote.jsx'
```

#### Component Props
The blockquote has the following props you need to populate content or use a variant

|Prop name   | Prop type | Requried |
|------------|-----------|----------|
| quote      | string    |   YES    |
| citation   | string    |   YES    |
| quoteLarge | boolean   |   NO     |



### CSS
You can include `component-blockquote` css in your project by referencing it from your existing CSS via `@import` statement:
```css
@import "node_modules/@coopdigital/component-blockquote/dist/blockquote.css";
```

If you use PostCSS in your build pipeline, you can reference the sources directly:
```css
@import "node_modules/@coopdigital/component-blockquote/src/blockquote.pcss";
```

If you use a `postcss-import` plugin:
```css
@import "@coopdigital/component-blockquote";
```


## License
Copyright (c) 2021 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).

