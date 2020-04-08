module.exports = function (migration) {
  const image = migration.createContentType('image');
  image.name('-- Image')
    .description('Use to place an image in a section or another component.')

  image.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  image.createField('image')
    .name("Image")
    .type("Link")
    .required(true)
    .linkType("Asset")
    .validations([
      {
        linkMimetypeGroup: ["image"],
        message: "Only images can be added to this field."
      }
    ]);

  image.displayField('name');
}