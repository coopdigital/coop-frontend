# shared-component--icon
A macro to return an SVG icon based on a value passed in.

## Installation
Install with NPM:
```bash
$ npm install @coopdigital/shared-component--icon --save
```

## Usage
Once installed, you can import icon.html from the shared components directory like you might do for squircles or editorial cards:

```
{% import '/shared-component--icon/src/icon.html' as icon %}
```

It can then be used from within your template as follows:

```
{%- set iconName = content.fields.icon | lower | replace(" ","_") -%}
{%- set iconClass = "coop-c-signpost__icon__svg" -%}

{{ icon.render(iconName, iconClass) }}
```

## Development
For information on how to develop this package see the [developing foundations and components for the design system documentation](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md).

## License
Copyright (c) 2021 Co-operative Group Limited.
Licensed [MIT](https://github.com/coopdigital/coop-frontend/blob/master/LICENSE).

