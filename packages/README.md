# Developing foundation and component packages for the design system

## Installation
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. Clone this repository, then install dependencies in the root of the repo:

 ```shell script
$ npm install
```

This will install lerna, then [bootstrap the local packages](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme).

## Adding a new package



## Testing the package in the design system



## 


## Publishing new versions
Creating and publishing new versions is only enabled on the master branch. To create and publish new versions, the following needs to be run by a user with write permissions to the @coopdigital npm registry.

```shell script
$ npm run publish
```

If you need permissions email matt.tyas@coop.co.uk

This should provide a prompt to update the version according to [semantic versioning](https://semver.org/) -- note that cross-linked dependencies within the local packages will be updated automatically.


## Lefthook git hooks pre commit
[Lefthook](https://github.com/Arkweid/lefthook) is used to manage git hooks in the repo.  [Intro article to lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape?utm_source=lefthook).

Currently, only one pre-commit hook is setup. This runs stylelint against currently staged `.css` and `.pcss` files.