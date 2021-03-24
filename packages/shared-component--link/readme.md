# Link

The Link component can be used as one of the following, depending on the type associated to it via contentful:
- internal link
- external link
- download link

The type of link being created determines how the HREF value is retreived.

If no `classNames` config is provided the component style will default to a generic link using the `coop-t-link` class.

#
## Config options

```TypeScript
{
  "icon": String,
  "iconClass": String,
  "svgClass": String,
  "classNames": String,
  "fullWidth": Boolean,
  "contentType": String - required,
  "contentParent": String - required,
}
```
