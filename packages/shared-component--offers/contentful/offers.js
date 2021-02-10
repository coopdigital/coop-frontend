module.exports = function (migration) {
  const offersModule = migration.createContentType('offersModule');
  offersModule.name('-- Offers')
    .description('A block with call to action to sign in and see your offers or become a member to get this benefit.');

  offersModule.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  offersModule.displayField('name');

  offersModule.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' },
  );
};
