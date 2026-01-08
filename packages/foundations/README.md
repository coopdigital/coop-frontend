# Co-op Foundations

Our foundations are the design basics that we build our products on.

We use foundations to help create our elements and components. When we keep our foundations consistent, our products look and feel consistent for customers.

## Structure and contents

The foundations are a mix of baseline CSS styles, fonts, custom properties and utility classes. We have split them into the following categories:

- Base
- Colors
- Layout
- Spacing
- Typography
- UI

## Usage

### Installation

```bash
npm install @coopdigital/foundations
```

### Recommended: Importing everything

```css
@import "@coopdigital/foundations/dist/vars/vars.css";
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
@import "@coopdigital/foundations/dist/ui/icons.css";

/* Utilities */
@import "@coopdigital/foundations/dist/colors/colors-utilities.css";
@import "@coopdigital/foundations/dist/colors/cls/colors-utilities-cls.css";
@import "@coopdigital/foundations/dist/colors/membership/colors-utilities-membership.css";
@import "@coopdigital/foundations/dist/typography/typography-utilities.css";
@import "@coopdigital/foundations/dist/spacing/spacing-utilities.css";
@import "@coopdigital/foundations/dist/layout/layout-utilities.css";
```

## Icon usage

Icons are separated out as separate SVG files in `src` and combined in the build script into an SVG sprite called `coop-icon-sprite.svg`.

This sprite can be served into your project from `node_nodules` from within `foundations/dist/assets/icons/coop-icon-sprite.svg`, using the build process of your choice.

[Go to the design guidelines on using the icons on the Experience Library icons page](https://www.coop.co.uk/experience-library/foundations/icon-set.html)

### Using the icons in your project

Once you have the icons loaded in your front-end you can reference them by using:

```html
<svg>
  <use xlink:href="coop-icon-sprite.svg#[icon-file-name]"></use>
</svg>
```

For example the shopping basket icon would be used with:

### Using the icons accessibly

You should always try to pair an icon with text if possible as suggested in the [Experience Library guidelines on icons](https://www.coop.co.uk/experience-library/foundations/icon-set.html)

If the icon is paired with text it is classed as decorative and can be hidden from screen readers.

```html
<p>
  <svg aria-hidden="“true”">
    <title>Basket</title>
    <use xlink:href="coop-icon-sprite.svg#icon-basket"></use>
  </svg>
  Basket
</p>
```

If it is not possible to pair the icon with text then the aria-hidden attribute is not needed.

```html
<svg role="img">
  <title>Basket</title>
  <use xlink:href="coop-icon-sprite.svg#icon-basket"></use>
</svg>
```

### CSS

There are some CSS classes to space and size the icons. The scooter being rectangular takes a modifier class to double the width.

```CSS
.coop-i {
    fill: currentColor;
    margin: 20px;
    width: 32px;
    height: 32px;
}

.coop-i--scooter {
    width: 64px;
}
```

### Full list of icons by ID

```
#icon-add
#icon-minus
#icon-arrow-up
#icon-arrow-down
#icon-arrow-left
#icon-arrow-right
#icon-chevron-up
#icon-chevron-down
#icon-chevron-left
#icon-chevron-right
#icon-avatar
#icon-avatar-alt
#icon-basket
#icon-clock
#icon-close
#icon-close-alt
#icon-coop
#icon-coop-card
#icon-location
#icon-coop-location
#icon-download
#icon-home
#icon-information
#icon-mail
#icon-menu
#icon-message
#icon-open-new
#icon-phone
#icon-question
#icon-search
#icon-settings
#icon-tick
#icon-tick-alt
#icon-van
#icon-warning
#icon-write
#icon-pencil
#icon-calendar
#icon-scooter
```

## Contributing

## Migration from css-foundations to foundations

[See our migration guide here](../../docs/migrations/@coopdigital-foundations-migration.md)
