# Co-op design system

The design system provides guidance on creating digital content for the Co-op.

## Dependencies

This project uses [Jekyll](http://jekyllrb.com/) to compile the pages, and various NPM modules to include the Co-op Front-end Toolkit dependency and  compile the assets. To install all required dependencies, run:

```
bundle install
npm install
```

## Local development

Once dependencies have been installed, you can build and serve the Design Manual locally. Gulp commands are already set up to generate the Jekyll build, lint and compile the SASS and JavaScript, to copy over necessary assets from the Toolkit, and to run a local server for development.

The default `gulp` task is configured to build and compile all the Design System assets. The `server` task will be most handy for local development: it will build the Jekyll site and compile all the assets, start a local server accessible at <http://localhost:9000> and start the watch tasks to automatically re-generate assets and pages on file change:

```
npm run server
```

## Heroku deployment

The Design system is automatically deployed to Heroku (<https://coop-design-manual.herokuapp.com>) when changes are merged into the master branch.
