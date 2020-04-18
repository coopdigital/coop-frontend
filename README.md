# Co-op Front-end
A mono-repository containing all the available Co-op Foundations libraries. All libraries are found in the [packages](./packages) directory.


## Co-op Design system
The [design system](http://coop.co.uk/designsystem) is within a sub folder of this repo and can be run locally and deployed to Heroku independently of the foundations and component packages. 

[How to install, run and deploy the design system](https://github.com/coopdigital/coop-frontend/blob/master/design-system/README.md)


## Developing foundation and component packages for the design system
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. These are published as separate pacakges to [Co-op digtial's NPM organisation]. These pacakges can be installed by digtial teams as required as dependencies of their project.

[How add and publish a pacakge](https://github.com/coopdigital/coop-frontend/blob/master/design-system/README.md)


## Local development
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. Clone this repository, then install dependencies:

 ```shell script
$ npm install
```

This will install lerna, then [bootstrap the local packages](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme).


### Publishing new versions
Creating and publishing new versions is only enabled on the master branch. To create and publish new versions, the following needs to be run by a user with write permissions to the @coopdigital npm registry:

```shell script
$ npm run publish
```

This should provide a prompt to update the version according to [semantic versioning](https://semver.org/) -- note that cross-linked dependencies within the local packages will be updated automatically.


### Lefthook git hooks pre commit
[Lefthook](https://github.com/Arkweid/lefthook)is used to manage git hooks in the repo.  [Intro article to lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape?utm_source=lefthook).

Currently, only one pre-commit hook is setup. This runs stylelint against currently staged `.css` and `.pcss` files.
