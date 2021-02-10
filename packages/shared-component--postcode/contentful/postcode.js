module.exports = function (migration) {
  const postcode = migration.createContentType('postcode');
  postcode.name('-- Postcode')
    .description('Use to direct people to ecommerce. Takes the user’s postcode and gives them options for shopping online.');

  postcode.createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 60 },
        message: 'Text in this field must be less than 60 characters.',
      },
    ]);

  postcode.createField('bodyText')
    .name('Body text')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 60 },
        message: 'Text in this field must be less than 60 characters.',
      },
    ]);

  postcode.createField('formPlaceholder')
    .name('Form placeholder')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { max: 60 },
        message: 'Text in this field must be less than 60 characters.',
      },
    ]);

  postcode.displayField('heading');

  const categoryPage = migration.editContentType('section');

  categoryPage.editField('content')
    .items({
      type: 'Link',
      validations: ([
        {
          linkContentType: [
            'editorialCard',
            'featureCard',
            'image',
            'linkList',
            'membership',
            'offers',
            'statement',
            'signpost',
            'text',
            'video',
            'postcode',
          ],
        },
      ]),
      linkType: 'Entry',
    });

  postcode.createField('utmSource')
    .name('UTM source')
    .type('Symbol')
    .required(true);

  postcode.createField('utmMedium')
    .name('UTM medium')
    .type('Symbol')
    .required(true);

  postcode.createField('utmCampaign')
    .name('UTM campaign')
    .type('Symbol')
    .required(true);
};
