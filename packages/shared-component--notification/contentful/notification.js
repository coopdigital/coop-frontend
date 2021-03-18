module.exports = function (migration) {
  const notification = migration.createContentType('notification');

  notification.name('-- Notification')
    .description('A notification that can be styled as an alert or generic notification.');

  notification.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  notification.createField('header')
    .name('Header')
    .type('Symbol')
    .required(true);

  notification.createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(false)
    .validations([
      {
        size: { max: 170 },
        message: 'Text in this field must be less than 170 characters.',
      },
    ]);

  notification.createField('link')
    .name('Link')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['externalLink', 'internalLink'],
      }
    ]);

  notification.createField('typeOfNotification')
    .name('Type of notification')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['alert', 'notification'],
      }
    ]);

  notification.changeFieldControl(
    'typeOfNotification',
    'builtin',
    'dropdown',
  )
}
