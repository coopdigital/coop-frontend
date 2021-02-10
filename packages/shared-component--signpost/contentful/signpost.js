module.exports = function (migration) {
  const signpost = migration.createContentType('signpost');
  signpost.name('-- Signpost link')
    .description('A link card that can be displayed with or without an image.');

  signpost.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  signpost.createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ]);

  signpost.createField('title')
    .name('Link text')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 40 },
        message: 'Text in this field must be less than 40 characters.',
      },
    ]);

  signpost.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['-- External link', '-- Internal link'],
      },
    ]);

  signpost.displayField('name');

  signpost.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' },
  );

  signpost.changeFieldControl(
    'title',
    'builtin',
    'singleLine',
    { helpText: 'This will be the text of the link.' },
  );

  signpost.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Add an internal or external link here.' },
  );
};
