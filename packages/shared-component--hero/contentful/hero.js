module.exports = function (migration) {
  const hero = migration.createContentType('hero');

  hero.name('-- Hero')
    .description('A page header that can be displayed with or without and image or background colour. Use to introduce the page and give it a clear, concise and meaningful title.');

  hero.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  hero.createField('showSquircle')
    .name('Show squircle?')
    .type('Boolean');

  hero.createField('background')
    .name('Change squircle background colour?')
    .type('Object');

  hero.displayField('name');

  hero.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' },
  );

  hero.createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ]);

  hero.createField('imageCaption')
    .name('Image caption')
    .type('Symbol')
    .validations([
      {
        size: { min: 5, max: 80 },
        message: 'Text in this field must be less than 10 characters.',
      },
    ]);

  hero.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 90 },
        message: 'Text in this field must be less than 90 characters.',
      },
    ]);

  hero.createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(true)
    .validations([
      {
        size: { max: 170 },
        message: 'Text in this field must be less than 170 characters.',
      },
    ]);

  hero.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['-- External link', '-- Internal link', '-- Signpost link'],
      },
    ]);

  hero.createField('contentPull')
    .name('Content pull')
    .type('Boolean');

  hero.displayField('name');

  hero.changeFieldControl(
    'showSquircle',
    'builtin',
    'boolean',
    {
      helpText: "If set to 'Yes' a coloured squircle will appear behind the header.",
      trueLabel: 'Yes',
      falseLabel: 'No',
    },
  );

  hero.changeFieldControl(
    'heroBackground',
    'extension',
    '69G1Od6HGaHOfOaqymoqaO',
  );

  hero.changeFieldControl(
    'imageCaption',
    'builtin',
    'singleLine',
    { helpText: 'This field can be used to add a legal disclaimer or supporting caption where absolutely necessary.' },
  );
  hero.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text will be the main heading of the page.' },
  );

  hero.changeFieldControl(
    'bodyText',
    'builtin',
    'multipleLine',
    { helpText: 'This text should help people decide if they are in the right place for what they need to do.' },
  );

  hero.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Use to add a link under the body text. This should be a main call to action.' },
  );

  hero.changeFieldControl(
    'contentPull',
    'builtin',
    'boolean',
    {
      helpText: "If 'Yes' the section under the hero will be pulled up to overlap.",
      trueLabel: 'Yes',
      falseLabel: 'No',
    },
  );
};
