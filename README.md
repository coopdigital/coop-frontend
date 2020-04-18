# Co-op Front-end
A mono-repository containing the design system website and foundations and component packages needed for designing and building digital services for the Co‑op. All packages are found in the [packages](./packages) directory.

## Co-op Design system
The [design system](http://coop.co.uk/designsystem) is a sub folder of this repo and can be run locally and deployed to Heroku independently of the foundations and component packages. 

[How to install, run and deploy the design system](https://github.com/coopdigital/coop-frontend/blob/master/design-system/README.md)


## Developing foundation and component packages for the design system
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. These are published as separate packages to [Co-op digtial's NPM organisation](https://www.npmjs.com/org/coopdigital). These packages can be installed by digtial teams as required as dependencies of their project.

[How add and publish a package](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md)
