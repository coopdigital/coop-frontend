# Co-op Foundations

Our foundations are the design basics that we build our products on.

We use foundations to help create our elements and components. When we keep our foundations consistent, our products look and feel consistent for customers.

## Structure and contents

The foundations are split into the following domains:

- [Base]()
- [Colors]()
- [Layout]()
- [Spacing]()
- [Typography]()
- [Ui]()

## Usage

### Installation

```bash
npm install @coopdigital/foundations
```

### Recommended: Importing everything

```css
@import "@coopdigital/foundations/dist/foundations.css";
```

This is the easiest way to get everything you need.

### Importing partials

If you only require partials of the foundations you can use the imports below. Make sure you keep the structure to ensure the cascade works.

```css
/* Variables */
/* Colours */
@import "@coopdigital/foundations/dist/vars/colors.css";
@import "@coopdigital/foundations/dist/vars/colors-cls.css";
@import "@coopdigital/foundations/dist/vars/colors-membership.css";
/* Typography */
@import "@coopdigital/foundations/dist/vars/typography.css";
/* Spacing */
@import "@coopdigital/foundations/dist/vars/spacing.css";
/* UI */
@import "@coopdigital/foundations/dist/vars/ui.css";

/* Base */
@import "@coopdigital/foundations/dist/base/base.css";
/* Typography */
@import "@coopdigital/foundations/dist/typography/typography.css";
/* Layout */
@import "@coopdigital/foundations/dist/layout/grid.pcss";
/* UI */
@import "@coopdigital/foundations/dist/ui/a11y.css";
@import "@coopdigital/foundations/dist/ui/logo.css";

/* Utilities */
@import "@coopdigital/foundations/dist/colors/colors-utilities.css";
@import "@coopdigital/foundations/dist/colors/cls/colors-utilities-cls.css";
@import "@coopdigital/foundations/dist/colors/membership/colors-utilities-membership.css";
@import "@coopdigital/foundations/dist/typography/typography-utilities.css";
@import "@coopdigital/foundations/dist/spacing/spacing-utilities.css";
@import "@coopdigital/foundations/dist/layout/layout-utilities.css";
```

## Contributing

## Migration from css-foundations to foundations

If you want to migrate from
