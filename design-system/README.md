# Co-op design system

The design system provides guidance on creating digital content for the Co-op.

## Local development

This project uses [Jekyll](http://jekyllrb.com/) to compile the pages from Contenful data, and various NPM modules to include the Co-op Front-end dependencies and  compile the assets. You must first configure some local environment variables in a `.env` file, which you can copy from the provided sample then fill in with the relevant values:

```
cp .env.sample .env
```

Now install all required dependencies:

```
bundle install
npm install
```

Once dependencies have been installed, you should first pull Contentful data to your local cache:

```
npm run contentful
```

You can now build and serve the Design Manual locally. Gulp commands are already set up to generate the Jekyll build, lint and compile the CSS and JavaScript, to copy over necessary assets from the Toolkit, and to run a local server for development.

The default `gulp` task is configured to build and compile all the Design System assets. The `server` task will be most handy for local development: it will build the Jekyll site and compile all the assets, start a local server accessible at <http://localhost:9000> and start the watch tasks to automatically re-generate assets and pages on file change:

```
npm run server
```

## Heroku deployment

The Design system is automatically deployed to Heroku (<https://coop-design-manual.herokuapp.com>) when changes are merged into the master branch.

## Algolia search indexing

To update the Algolia search index, you will first need to set the following variables with the relevant values in your `.env` file:

```
ALGOLIA_API_KEY=
ALGOLIA_APPLICATION_ID=
ALGOLIA_INDEX_NAME=
```
