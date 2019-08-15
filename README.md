# Co-op Front-end

A mono-repository containing all the available Co-op Foundations libraries. All libraries are found in the [packages](./packages) directory.

## Local development
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. Clone this repository, then install dependencies:
 
 ```shell script
$ npm install
```

This will install lerna, then [bootstrap the local packages](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme).

### Publishing new versions

Creating and publishing new versions is only enabled on the master branch. To create and publish new versions, the following needs to be run by a user with write permissions to the @coopdigital npm registry:

```shell script
$ lerna publish
``` 

This should provide a prompt to update the version according to [semantic versioning](https://semver.org/) -- note that cross-linked dependencies within the local packages will be updated automatically.
