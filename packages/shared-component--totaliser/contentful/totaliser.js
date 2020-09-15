module.exports = function (migration) {
  const totaliser = migration.createContentType('totaliser');

  totaliser.name('-- Totaliser')
    .description('A component to show amount of money raised by Co-op members.')

  totaliser.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  totaliser.createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(true)
    .validations([
      {
        size: { max: 125 },
        message: "Text in this field must be less than 125 characters."
      }
    ]);

  totaliser.createField('amount')
    .name('Amount raised')
    .type('Number')
    .required(true)

  totaliser.createField('strapline')
    .name('Strapline')
    .type('Symbol')
    .validations([
      {
        size: { max: 30 },
        message: "Text in this field must be less than 30 characters."
      }
    ]);

  totaliser.displayField('name');

  totaliser.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  totaliser.changeFieldControl(
    'bodyText',
    'builtin',
    'singleLine',
    { helpText: 'This text should give a brief supporting description.' }
  )

  totaliser.changeFieldControl(
    'strapline',
    'builtin',
    'singleLine',
    { helpText: 'This text sits under the amount raised number.' }
  )

  totaliser.changeFieldControl(
    'amount',
    'builtin',
    'numberEditor',
    {
      helpText: "This is the amount raised."
    }
  );
}