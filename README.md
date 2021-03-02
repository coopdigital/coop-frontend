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

## Storybook react UI library
Storybook allows us to create and update react components within the `./packages` directory, using the existing css and utility packages.

In storybook there are addons allowing you to view your component stories as raw html, have basic accessibility checks, link to the relevant designs within Figma, and more.

Storybook components are broken into the following groups:
- Foundations,
- Elements,
- Components
- (tbc) Patterns.
### **How to install, run and deploy the Co-op react storybook**
To run storybook locally, run the following commands:
- `npm ci`
- `npm run storybook`

Storybook should now be available at `http://localhost:6006`

### **Add components and stories to Storybook**
The two most common ways you will create components for react are, adding a react component to an existing package, or creating a brand new package.
#### **If you are creating a react compoennt for an existing package:**
- From the `./packages/component-template` directory, copy the `index.mjs`, `Component.jsx` and `Component.stories.mdx` files, and the `__test__` directory from the package
- Paste these into component directory you are working on and rename the component accordingly.
- Add your tests to `__test__/<Yourcomponent>.test.jsx`;
- Stories are added to `<Yourcomponent>.stories.mdx` files.  Review the `Component.stories.mdx` example file and its comments for help with creating stories,
#### **If you are creating a new react component, follow these steps:**
- Make a copy of the `./component-template` directory in the `./packages` directory
- Rename the copied directory and its contained files, to your component name.
- Start adding tests and creating the component


### Useful links for Storybook and react
- [Storybook docs](https://storybook.js.org/docs/react/get-started/introduction)
- [Storybook mdx docs](https://storybook.js.org/docs/react/writing-docs/mdx)
- [Storybook mdx api](https://storybook.js.org/docs/react/api/mdx)
- [MDX](https://mdxjs.com/)
- [React - Getting Started](https://reactjs.org/docs/getting-started.html)
- [Jest docs](https://jestjs.io/docs/en/getting-started)
<!-- - [React testing library](https://testing-library.com/docs/react-testing-library/intro/) -->