module.exports = function (migration) {
  const video = migration.createContentType('video');
  video.name('-- Video')
    .description('Use to add a video.')

  video.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true)

  video.createField('videoUrl')
    .name('Video web address')
    .type('Symbol')
    .required(true)

  video.createField('transcript')
    .name('Transcript')
    .type('Text')
    .required(true)

  video.displayField('name');

  video.changeFieldControl(
    'name',
    'builtin',
    'singleLine',
    { helpText: 'This is the name of the component in Contentful. It will not display on the website.' }
  )

  video.changeFieldControl(
    'videoUrl',
    'builtin',
    'urlEditor',
    { helpText: 'Add the full URL from the address bar on Youtube (for example https://www.youtube.com/watch?v=CY3HeBoj1Tk)' }
  )

  video.changeFieldControl(
    'transcript',
    'builtin',
    'markdown',
    { helpText: 'Enter a transcript of the video. This can be taken from Settings > Open transcript on Youtube.' }
  )

}

