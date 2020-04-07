module.exports = function (migration) {
  const linkList = migration.createContentType('linkList');
  linkList.name('-- List of links')
    .description('A list of internal and external links. Use to group useful, relevant links together.')

  linkList.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  linkList.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 30 },
        message: 'Text in this field must be less than 30 characters.'
      }
    ]);

  linkList.createField('link')
    .name('Link')
    .type('Array')
    .items({
      type: 'Link',
      validations: ([
        {
          'linkContentType': [
            '-- External link',
            '-- Internal link'
          ]
        }
      ]),
      linkType: 'Entry'
    })

  linkList.displayField('name');

  linkList.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text should be a concise title for the list. It should help people by breaking links up into clear categories.' }
  )

  linkList.changeFieldControl(
    'link',
    'builtin',
    'entryLinksEditor',
    { helpText: 'Add internal and external links here.' }
  )
}