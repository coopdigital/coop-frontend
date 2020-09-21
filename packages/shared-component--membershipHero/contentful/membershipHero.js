module.exports = function (migration) {
    const hero = migration.createContentType('membershipHero');

    hero.name('-- Membership hero')
        .description('A page header that can be used to promote membership.')

    hero.createField('name')
        .name('Name')
        .type('Symbol')
        .required(true)

    hero.createField('homeHero')
        .name('Main homepage hero?')
        .type('Boolean')

    hero.createField('heroBackground')
        .name('Background colour')
        .type('Object')

    hero.createField('heading')
        .name('Heading')
        .type('Symbol')
        .required(true)
        .validations([
            {
                size: { max: 90 },
                message: "Text in this field must be less than 90 characters."
            }
        ]);

    hero.createField('bodyText')
        .name('Body text')
        .type('Text')
        .required(true)
        .validations([
            {
                size: { max: 170 },
                message: "Text in this field must be less than 170 characters."
            }
        ]);

    hero.createField('appStoreLink')
        .name('App store link')
        .type('Link')
        .linkType('Entry')
        .validations([
            {
                linkContentType: ['externalLink', 'internalLink']
            }
        ]);

    hero.createField('googlePlayLink')
        .name('Google play link')
        .type('Link')
        .linkType('Entry')
        .validations([
            {
                linkContentType: ['externalLink', 'internalLink']
            }
        ]);

    hero.createField('button')
        .name('Button')
        .type('Link')
        .linkType('Entry')
        .validations([
            {
                linkContentType: ['externalLink', 'internalLink']
            }
        ]);

    hero.createField('link')
        .name('Additional link')
        .type('Link')
        .linkType('Entry')
        .validations([
            {
                linkContentType: ['externalLink', 'internalLink']
            }
        ]);

    hero.createField('image')
        .name("Image")
        .type("Link")
        .linkType("Asset")
        .validations([
            {
                linkMimetypeGroup: ["image"]
            }
        ]);

    hero.createField('imageType')
        .name('Type of hero image')
        .type('Symbol')
        .validations([
            {
                in: ['Handset', 'Photo']
            }
        ]);

    hero.displayField('name');

    hero.changeFieldControl(
        'name',
        'builtin',
        'singleLine',
        { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
    )

    hero.changeFieldControl(
        'homeHero',
        'builtin',
        'boolean',
        {
            helpText: "Set to yes if this hero appears at the top of the page",
            trueLabel: "Yes",
            falseLabel: "No"
        }
    )

    hero.changeFieldControl(
        'heading',
        'builtin',
        'singleLine',
        { helpText: 'This text will be the main heading of the page.' }
    )

    hero.changeFieldControl(
        'bodyText',
        'builtin',
        'multipleLine',
        { helpText: 'This text should help people decide if they are in the right place for what they need to do.' }
    )

    hero.changeFieldControl(
        'button',
        'builtin',
        'entryLinkEditor',
        { helpText: 'Use to add a button under the body text.' }
    )

    hero.changeFieldControl(
        'link',
        'builtin',
        'entryLinkEditor',
        { helpText: 'Use to add an additional link under the body text.' }
    )


}