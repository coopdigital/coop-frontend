module.exports = function (migration) {
  const appDownload = migration.createContentType('appDownload');

  appDownload.name('-- App download')
    .description('A component that allows for app download. Choose a smaller version with text and download buttons or a larger version with longer text and image.')

  appDownload.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  appDownload.createField('miniVersion')
    .name('Mini version')
    .type('Boolean')

  appDownload.createField('handsetImage')
    .name('Handset Image')
    .type('Boolean')

  appDownload.createField('imagePositionRight')
    .name('Place image on the right?')
    .type('Boolean')

  appDownload.createField('image')
    .name("Image")
    .type("Link")
    .required(true)
    .linkType("Asset")
    .validations([
      {
        linkMimetypeGroup: ["image"]
      }
    ]);

  appDownload.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 60 },
        message: "Text in this field must be less than 60 characters."
      }
    ]);

  appDownload.createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(true)
    .validations([
      {
        size: { max: 500 },
        message: "Text in this field must be less than 500 characters."
      }
    ]);

  appDownload.createField('appStoreLink')
    .name('App store link')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['externalLink']
      }
    ]);

  appDownload.createField('googlePlayLink')
    .name('Google play link')
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

  appDownload.displayField('name');

  appDownload.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  appDownload.changeFieldControl(
    'miniVersion',
    'builtin',
    'boolean',
    {
      helpText: "If set to 'Yes', a smaller version with no image will show. Body text for this version should be 1 line of no more than 50 characters.",
      trueLabel: "Yes",
      falseLabel: "No"
    }
  )

  appDownload.changeFieldControl(
    'handsetImage',
    'builtin',
    'boolean',
    {
      helpText: "Select 'Yes' if you are going to add a handset image.",
      trueLabel: "Yes",
      falseLabel: "No"
    }
  )

  appDownload.changeFieldControl(
    'imagePositionRight',
    'builtin',
    'boolean',
    {
      helpText: "If 'Yes' this will move the image to the right.",
      trueLabel: "Yes",
      falseLabel: "No"
    }
  )

  appDownload.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text will be heading of the block. Use to introduce the main action, for example "Download the Co-op App".' }
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
    { helpText: 'This should be a link to download the app from the App store.' }
  )

  appDownload.changeFieldControl(
    'googlePlayLink',
    'builtin',
    'entryLinkEditor',
    { helpText: 'This should be a link to download the app from Google play.' }
  )

  appDownload.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Use to add a link under the app download buttons. This should be a link to the Co-op App landing page.' }
  )
}