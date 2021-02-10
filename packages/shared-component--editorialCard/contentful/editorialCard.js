module.exports = function (migration) {
  const editorialCard = migration.createContentType('editorialCard');
  editorialCard.name('-- Editorial card')
    .description('A text box with title that can be displayed with or without an image or label. Use to introduce journeys, linking through to main tasks and detailed information.');

  editorialCard.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  editorialCard.createField('image')
    .name('Image')
    .type('Link')
    .required(true)
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ]);

  editorialCard.createField('label')
    .name('Label')
    .type('Symbol')
    .validations([
      {
        size: { max: 30 },
        message: 'Text in this field must be less than 30 characters.',
      },
    ]);

  editorialCard.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 90 },
        message: 'Text in this field must be less than 90 characters.',
      },
    ]);

  editorialCard.createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(true)
    .validations([
      {
        size: { max: 170 },
        message: 'Text in this field must be less than 170 characters.',
      },
    ]);

  editorialCard.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['-- External link', '-- Internal link'],
      },
    ]);

  editorialCard.createField('imagePositionRight')
    .name('Place image on the right?')
    .type('Boolean');

  editorialCard.displayField('name');

  editorialCard.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' },
  );

  editorialCard.changeFieldControl(
    'label',
    'builtin',
    'singleLine',
    { helpText: 'This text should give context and help people find what they are looking for.' },
  );

  editorialCard.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text should give context and help people find what they are looking for.' },
  );

  editorialCard.changeFieldControl(
    'bodyText',
    'builtin',
    'multipleLine',
    { helpText: 'This text should help people decide if they want to click by introducing what the content is about.' },
  );

  editorialCard.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Link to the page you want people to go to when they click the card.' },
  );

  editorialCard.changeFieldControl(
    'imagePositionRight',
    'builtin',
    'boolean',
    {
      helpText: "If 'Yes' this will move the image to the right.",
      trueLabel: 'Yes',
      falseLabel: 'No',
    },
  );
};
