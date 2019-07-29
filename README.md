# Co-op Front-end

A mono-repository containing all the available Co-op Foundations libraries.

This repository uses [lerna](https://github.com/lerna/lerna) to manage versioning of all the different packages. Let's discuss this whole approach in the issues: what do we think of using subdirectories? Do we know how we want to handle actual publishing of packages: should it be the reviewer's responsibility to merge then run `lerna publish`? What about CI/CD process? 

All the packages in this test repo are marked as private for now so you can try running `lerna publish` -- it won't have any effect other than pushing new tags to this repository.

