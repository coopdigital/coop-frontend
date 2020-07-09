# Co-op design system
The [design system](http://coop.co.uk/designsystem) provides guidance on designing and building digital services for the Co‑op.

## Dependencies
This project uses [Jekyll](http://jekyllrb.com/) to compile the pages, and NPM packages to include the foundation and component packages dependencies and compile the assets. To install all required dependencies, run:

```
bundle install
npm ci
```

## Local development
Once dependencies have been installed, you can build and serve the Design system locally. Gulp commands are already set up to generate the Jekyll build, lint and compile the CSS and JavaScript and to run a local server for development.

The default `gulp` task is configured to build and compile all the Design System assets. The `server` task will be most handy for local development: it will build the Jekyll site and compile all the assets, start a local server accessible at <http://localhost:9000> and start the watch tasks to automatically re-generate assets and pages on file change:

```
npm run server
```

## Heroku deployment
Changes should be created on branches then submitted as a pull request. [Circle CI](https://circleci.com/gh/coopdigital/workflows/coop-frontend) runs `build_pacakges` (to check that all the foundations and components are building successfully) and `build` to check that the Design system is building correctly.

Once the branch is merged the Design system is automatically deployed to Heroku (<https://coop-design-manual.herokuapp.com>) using an extra `deploy` step in the Cirlce CI workflow.
