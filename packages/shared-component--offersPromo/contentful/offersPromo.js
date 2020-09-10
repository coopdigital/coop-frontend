module.exports = function (migration) {
  const featureCard = migration.createContentType('featureCard');
  featureCard.name('-- Feature card')
    .description('A text box with image that can be displayed with or without a squircle. Use to highlight and link to featured content.')

  featureCard.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  featureCard.createField('image')
    .name("Image")
    .type("Link")
    .required(true)
    .linkType("Asset")
    .validations([
      {
        linkMimetypeGroup: ["image"]
      }
    ]);


  featureCard.createField('squirclePicker')
    .name('Squircle picker')
    .type('Symbol')
    .required(true)
    .validations([
      {
        "in": [
          "No squircle",
          "Large text top squircle",
          "Large text bottom squircle",
          "Large text only squircle",
          "Super saver squircle",
          "New squircle",
          "New recipe squircle",
          "Fresh 3"
        ]
      }
    ]);

  featureCard.createField('squircleTop')
    .name('Squircle text top')
    .type('Text')
    .validations([
      {
        size: { max: 10 },
        message: "Text in this field must be less than 10 characters."
      }
    ]);

  featureCard.createField('squircleBottom')
    .name('Squircle text bottom')
    .type('Text')
    .validations([
      {
        size: { max: 10 },
        message: "Text in this field must be less than 10 characters."
      }
    ]);

  featureCard.createField('bodyText')
    .name('Body text')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 60 },
        message: "Text in this field must be less than 60 characters."
      }
    ]);

  featureCard.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['-- External link', '-- Internal link']
      }
    ]);

  featureCard.displayField('name');

  featureCard.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  featureCard.changeFieldControl(
    'squirclePicker',
    'extension',
    '1IKETYxUIyGWuINpBooJFA'
  )

  featureCard.changeFieldControl(
    'squircleTop',
    'builtin',
    'singleLine',
    { helpText: 'This text will appear on the top line inside the squircle.' }
  )

  featureCard.changeFieldControl(
    'squircleBottom',
    'builtin',
    'singleLine',
    { helpText: 'This text will appear on the bottom line inside the squircle.' }
  )

  featureCard.changeFieldControl(
    'bodyText',
    'builtin',
    'singleLine',
    { helpText: 'This text should briefly tell people what the featured content is about.' }
  )

  featureCard.changeFieldControl(
    'link',
    'builtin',
    'entryLinkEditor',
    { helpText: 'Link to the page you want people to go to when they click the card.' }
  )
}

