module.exports = function (migration) {
  const membershipFeatured = migration.createContentType('membershipFeatured');

  membershipFeatured.name('-- Membership Featured section')
    .description('A section that can be used to promote membership.')

  membershipFeatured.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  membershipFeatured.createField('heading')
    .name('Heading')
    .type('Symbol')
    .validations([
      {
        size: { max: 90 },
        message: "Text in this field must be less than 90 characters."
      }
    ]);

  membershipFeatured.createField('background')
    .name('Background colour')
    .type('Object')

  membershipFeatured.createField('editorialCards')
    .name('Content')
    .type('Array')
    .validations([
      {
        size: { max: 3 }
      }
    ])
    .items({
      type: 'Link',
      validations: ([
        {
          'linkContentType': [
            'editorialCard'
          ]
        }
      ]),
      linkType: 'Entry'
    })

  membershipFeatured.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['externalLink', 'internalLink']
      }
    ]);
  membershipFeatured.displayField('name');

  membershipFeatured.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  membershipFeatured.changeFieldControl(
    'heading',
    'builtin',
    'singleLine',
    { helpText: 'This text will be the main heading of the page.' }
  )

  membershipFeatured.changeFieldControl(
    'editorialCards',
    'builtin',
    'entryLinksEditor',
    { helpText: 'Add editorial cards' }
  )

  membershipFeatured.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Use to add a link under the editorial cards.' }
  )

}