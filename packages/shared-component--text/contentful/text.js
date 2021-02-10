module.exports = function (migration) {
  const text = migration.createContentType('text');
  text.name('-- Text')
    .description('Use to add a block of body text.');

  text.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  text.createField('text')
    .name('Text')
    .type('Text')
    .required(true);

  text.displayField('name');

  text.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' },
  );

  text.changeFieldControl(
    'text',
    'builtin',
    'markdown',
    { helpText: 'Add plain text and format it using Markdown or the options on the bar above the text box. Embedded images are rendered at actual size and should be no wider than 680px.' },
  );
};
