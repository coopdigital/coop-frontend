module.exports = function (migration) {
  const offerCard = migration.createContentType('offerCard');
  offerCard.name('Offer card')
    .description('Displays text and image to give an example of an offer in the Offers promo banner.');

  offerCard.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  offerCard.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 25 },
        message: 'Text in this field must be less than 25 characters.',
      },
    ]);

  offerCard.createField('description')
    .name('Description')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 60 },
        message: 'Text in this field must be less than 60 characters.',
      },
    ]);

  offerCard.createField('image')
    .name('Image')
    .type('Link')
    .required(true)
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ]);

  offerCard.displayField('name');

  offerCard.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' },
  );

  offerCard.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text should be the main information of the offer. For example, "£1 off".' },
  );

  offerCard.changeFieldControl(
    'description',
    'builtin',
    'singleLine',
    { helpText: 'This text should follow on from the heading and briefly describe the offer.' },
  );
};
