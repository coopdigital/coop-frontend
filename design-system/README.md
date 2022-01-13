# Deprecation warning
This website has now been replaced with our new [Experience Library](https://github.com/coopdigital/experience-library). This is now a private repository. If you are a colleage and require access, please contact the project admins.

You can still use the website application locally in order to test changes to packages. We do plan to create a new iteration of a component "workbench" in 2022. So this will be subject to change in the future.

## Co-op design system

The [design system](http://coop.co.uk/designsystem) provides guidance on designing and building digital services for the Co‑op.

## Dependencies

### Prerequisites

If this is the first time you are running a Co-op project, of if you're on a new Mac/Catalina, then please check you have any/all of the following:

- Install [Node](https://nodejs.org/en/download/)
- Install [Homebrew](https://brew.sh) 
- GNUPG: `brew install gnupg gnupg2` via command line. This is just to install the GPG keys used to verify the RVM installation and may not always be necessary. 
- Install [RVM](https://rvm.io/rvm/install)
- XCode can be downloaded from the App store

Then:

- RVM: `rvm install "ruby-2.6.3"` via command line
- Check `$PATH` is pointing to the correct version of Ruby ie. the one RVM has installed and not the system version. Double check with `echo $PATH` (see below)
- `rvm get stable --auto-dotfiles` seemed to fix some issues with regards to PATH settings
- You may also need `sudo` rights in non-admin account

`echo $PATH` in command line should output similar to:

`/Users/USER/.rvm/gems/ruby-2.6.3/bin /Users/USER/.rvm/gems/ruby-2.6.3@global/bin /Users/USER/.rvm/rubies/ruby-2.6.3/bin /usr/local/bin /usr/bin /bin /usr/sbin /sbin /Library/Apple/usr/bin /Users/USER/.rvm/bin`

## Next steps

This project uses [Jekyll](http://jekyllrb.com/) to compile the pages, and NPM packages to include the foundation and component packages dependencies and compile the assets. To install all required dependencies, run:

```
npm ci

bundle install
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
