# Co-op Front-end
A mono-repository containing the design system website and foundations and component packages needed for designing and building digital services for the Co‑op. All packages can be found in the [packages](./packages) directory.

## Co-op Design system
The [design system](http://coop.co.uk/designsystem) is a sub folder of this repo and can be run locally and deployed to Heroku independently of the foundations and component packages.

[How to install, run and deploy the design system](https://github.com/coopdigital/coop-frontend/blob/master/design-system/README.md)


## Storybook react UI library
The storybook instance allows us to create and update react components within the `./packages` directory, using existing css and utility packages.
There are a number storybook addons allowing you to view your component stories as raw html, have basic accessibility checks for each component, link to the relevant designs within Figma, and more.

Storybook components are broken into the following groups.  Foundations, Elements, Components and Patterns.

### How to install, run and deploy the Co-op react storybook
To run storybook locally, run the following commands:
- `npm ci`
- `npm run storybook`

Storybook should now be available at `http://localhost:6006`

- From the `./packages/component-template` directory, copy the `index.mjs`, `component.jsx` and `component.stories.mdx` files, and the `__test__` directory from the package
- Paste these into your working component.  You now have base files for react component creation
- Add your tests to `__test__/component.test.jsx`;
- Stories are added to .stories.mdx files.  Review the example file and its comments for help with creating stories, or follow one of these guides:  +++ADD GUIDE LINKS HERE+++


### Add components and stories to Storybook
If you are creating a react compoennt for an existing package:

If you are creating a new react component, follow these steps:
- Make a copy of the `./component-template` directory in the `./packages` directory
- Rename the copied directory to your component name
- Use the .jsx file to create your component

## Developing foundation and component packages for the design system
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. These are published as separate packages to [Co-op digital's NPM organisation](https://www.npmjs.com/org/coopdigital). These packages can be installed by digital teams as required as dependencies of their project.

[How add and publish a package](https://github.com/coopdigital/coop-frontend/blob/master/packages/README.md)

## Letting people know about changes
If you publish a new or amended component - create a release for the coop-frontend repo adding release notes to let everyone know what changes you have made and why.

The Slack github integration will let everyone on the #frontend and #designsystem channels know that there has been an update.
