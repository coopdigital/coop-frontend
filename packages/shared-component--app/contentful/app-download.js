module.exports = function (migration) {
  const appDownload = migration.createContentType('appDownload');

  appDownload.name('-- App download')
    .description('A component to promote app download.')

  appDownload.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  appDownload.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 90 },
        message: "Text in this field must be less than 90 characters."
      }
    ]);

  appDownload.createField('miniVersion')
    .name('Mini version')
    .type('Boolean')

  appDownload.createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(true)
    .validations([
      {
        size: { max: 300 },
        message: "Text in this field must be less than 300 characters."
      }
    ]);

  appDownload.createField('appStoreLink')
    .name('App store link')
    .required(true)
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['externalLink']
      }
    ]);

  appDownload.createField('googlePlayLink')
    .name('Google play link')
    .required(true)
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['externalLink']
      }
    ]);

  appDownload.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['externalLink', 'internalLink']
      }
    ]);

  appDownload.createField('image')
    .name("Image")
    .type("Link")
    .linkType("Asset")
    .validations([
      {
        linkMimetypeGroup: ["image"]
      }
    ]);

  appDownload.createField('handsetImage')
    .name('Handset Image')
    .type('Boolean')

  appDownload.displayField('name');

  appDownload.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  appDownload.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text will be heading of the banner. Use to introduce the main action, for example "Join Co-op and get personalised offers".' }
  )

  appDownload.changeFieldControl(
    'miniVersion',
    'builtin',
    'boolean',
    {
      helpText: "If set to 'Yes', the body text should only be 1 line long.",
      trueLabel: "Yes",
      falseLabel: "No"
    }
  )

  appDownload.changeFieldControl(
    'bodyText',
    'builtin',
    'multipleLine',
    { helpText: 'This text should give a brief supporting description.' }
  )

  appDownload.changeFieldControl(
    'appStoreLink',
    'builtin',
    'entryLinkEditor',
    { helpText: 'This should a link to download the app from the App store.' }
  )

  appDownload.changeFieldControl(
    'googlePlayLink',
    'builtin',
    'entryLinkEditor',
    { helpText: 'This should a link to download the app from Google play.' }
  )

  appDownload.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Use to add a link under the app download buttons. This should be link to give more information about the Co-op app.' }
  )

  appDownload.changeFieldControl(
    'handsetImage',
    'builtin',
    'boolean',
    {
      helpText: "Select 'Yes' if using an image of a handset to promot app download.",
      trueLabel: "Yes",
      falseLabel: "No"
    }
  )
}