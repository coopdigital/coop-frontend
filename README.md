# Co-op Front-end

A mono-repository containing foundations and component packages needed for designing and building digital services for the Co‑op. All packages can be found in the [packages](./packages) directory.

🚨 This project uses `yarn` rather than `npm` as it allows us to manage local workspaces and maintain links to local components. This is a requirement not a preference. 🚨

## Prerequisites

- Lerna installed globally `npm install lerna -g`
- Yarn installed globally `npm install yarn -g`
- Ensure you are using node 16.5 - you may wish to [install nvm to help with this](https://github.com/nvm-sh/nvm)

## Installation

- Clone this repo onto your machine
- From the root run `yarn install`
- This may take a while to complete but once it is done you should be able to cd into the `workbench` directory and run `yarn dev`

## Gotchas

- Make sure you use `yarn add` rather than `npm install`
- Make sure you run `yarn dev` rather than `npm dev`

## Developing foundation and component packages

This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. These are published as separate packages to [Co-op digital's NPM organisation](https://www.npmjs.com/org/coopdigital). These packages can be installed by digital teams as required as dependencies of their project.

[How add and publish a package](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md)

## Letting people know about changes

If you publish a new or amended component - create a release for the coop-frontend repo adding release notes to let everyone know what changes you have made and why.

The Slack github integration will let everyone on the #frontend and #designsystem channels know that there has been an update.

## Using a package that is deprecated?

We have been changing a lot in our frontend packages in order to simplify how teams use them. This means we have deprecated packages in favour of others or that it was no longer needed.

If you are using a deprecated package please look in our `./docs/migrations` directory for a possible migration or contact the Experience Library Slack channel for support [#experience-library-support](https://co-opdigital.slack.com/archives/C01ASJRQUCD)
