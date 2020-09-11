module.exports = function (migration) {
  const offersPromo = migration.createContentType('offersPromo');
  offersPromo.name('-- Offers promo')
    .description('Promo banner for Offers with an example of an offer. Use to promote Offers.')

  offersPromo.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  offersPromo.createField('offerLink')
    .name('Offers link')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['externalLink', 'internalLink']
      }
    ]);

  offersPromo.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 90 },
        message: "Text in this field must be less than 90 characters."
      }
    ]);

  offersPromo.createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(true)
    .validations([
      {
        size: { max: 125 },
        message: "Text in this field must be less than 125 characters."
      }
    ]);

  offersPromo.createField('offerCard')
    .name('Offer Card')
    .required(true)
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['offerCard']
      }
    ]);

  offersPromo.createField('legalLink')
    .name('Legal link')
    .required(true)
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['externalLink', 'internalLink']
      }
    ]);

  offersPromo.displayField('name');

  offersPromo.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  offersPromo.changeFieldControl(
    'offerLink',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Add a link to the page you want to send the user to when they click the banner. For this component this should be a link to Offers.' }
  )

  offersPromo.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text will be heading of the banner. Use to introduce the main action, for example "Join Co-op and get personalised offers".' }
  )

  offersPromo.changeFieldControl(
    'bodyText',
    'builtin',
    'singleLine',
    { helpText: 'This text should give a brief supporting description.' }
  )

  offersPromo.changeFieldControl(
    'legalLink',
    'builtin',
    'entryLinkEditor',
    { helpText: 'This should be a clear link to the terms and conditions.' }
  )

  offersPromo.changeFieldControl(
    'offerCard',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Add the card for the example offer that will appear on the banner.' }
  )
}