module.exports = function (migration) {
  const membership = migration.createContentType('membershipModule');
  membership.name('-- Membership module')
    .description('A block with call to action to become a member. Can be displayed with or without supporting links.');

  membership.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  membership.createField('links')
    .name('Links')
    .type('Array')
    .validations([
      {
        size: { max: 6 },
      },
    ])
    .items({
      type: 'Link',
      validations: ([
        {
          linkContentType: [
            '-- External link',
            '-- Internal link',
          ],
        },
      ]),
      linkType: 'Entry',
    });
  membership.displayField('name');

  membership.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' },
  );
};
