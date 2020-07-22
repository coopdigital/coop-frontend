# Co-op Front-end
A mono-repository containing the design system website and foundations and component packages needed for designing and building digital services for the Co‑op. All packages can be found in the [packages](./packages) directory.

## Co-op Design system
The [design system](http://coop.co.uk/designsystem) is a sub folder of this repo and can be run locally and deployed to Heroku independently of the foundations and component packages. 

[How to install, run and deploy the design system](https://github.com/coopdigital/coop-frontend/blob/master/design-system/README.md)


## Developing foundation and component packages for the design system
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. These are published as separate packages to [Co-op digital's NPM organisation](https://www.npmjs.com/org/coopdigital). These packages can be installed by digital teams as required as dependencies of their project.

[How add and publish a package](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md)

## Letting people know about changes
If you publish a new or amended component - create a release for the coop-frontend repo adding release notes to let everyone know what changes you have made and why.

The Slack github integration will let everyone on the #frontend and #designsystem channels know that there has been an update.
