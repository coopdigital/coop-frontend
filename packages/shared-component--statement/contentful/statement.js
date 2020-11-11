module.exports = function (migration) {
  const statement = migration.createContentType('statement');
  statement.name('-- Statement block')
    .description('Use to highlight quotes, testimonials, important statistics or significant statements.')

  statement.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  statement.createField('quote')
    .name('Add speech mark?')
    .type('Boolean')

  statement.createField('quoteColourWhite')
    .name('Quote colour white')
    .type('Boolean')

  statement.createField('statement')
    .name('Statement')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 100 },
        message: "Text in this field must be less than 100 characters."
      }
    ]);

  statement.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['-- External link', '-- Internal link']
      }
    ]);

  statement.createField('background')
    .name('Choose a background colour')
    .type('Object')

  statement.displayField('name');

  statement.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  statement.changeFieldControl(
    'quote',
    'builtin',
    'boolean',
    {
      helpText: "Selecting 'yes' will show a speech mark above the quote.",
      trueLabel: "Yes",
      falseLabel: "No"
    }
  )

  statement.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'This text should briefly tell people what the featured content is about.' }
  )

}

