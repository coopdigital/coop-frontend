# react-ui Storybook

This repository is for developer documentation of react components.

A number of teams across Co-op use React in their projects. Each team may have implemented React differently, through Typescript, different coding practices or using different react frameworks.

The aim of the project is begin documenting base level elements and components from the coop-frontend experience library in React. As we progress we'll be working with teams across Co-op to look at each of teams React implementations. Working with other teams will help us form future iterations of this project for documentation and publishing of reusable React components across Co-op.

## Storybook react-ui library

Storybook allows you to create and update react components within the `./packages/react-ui` directory, using existing css and utility packages.

Storybook helps us develop components and pages in isolation. It has a number of tools and addons you can install that help us with accessibility testing, viewing raw html of a component, creating developer documention, viewing Figma designs of a component, and visual regression testing to name a few.

Currently our storybook react-ui library is for documentation only. The components within the react-ui package are not currently distributed.

### **How to install, run and deploy the Co-op react storybook**

To run storybook locally, run the following commands:

```bash
cd packages/react-ui
npm ci
npm run storybook
```

Storybook should now be available at `http://localhost:6006`

### To run tests

To run storybook locally, run the following commands:

```bash
cd packages/react-ui
npm ci
npm test
```

#### **If you are creating a react component for an existing package:**

Install the existing component as a dependency to the react-ui package.

- `cd packages/react-ui`
- `npm install @coopdigital/<EXISTING_PACKAGE_NAME>`
- open `.storybook/preview.js`
  - You will see a number of imports from `@coopdigital` at the top of the preview.js file.
    Add a line with `import @coopdigital/<EXISTING_PACKAGE_NAME>` to the list.
    This step import the components css at the root level of storybook

Use the ComponentExample as a starter for your new component

- Copy the `ComponentExample` directory from `react-ui/src/`.
- Paste and rename the ComponentExample directory to your new component name
- Rename the files within the directory to your new component name
- Begin development and testing of your new react component
- The files provided should be commented to help you get started

More links on getting started with storybook and react are listed below.

#### **If you are creating a new react component, follow these steps:**

**_TBC_**

### Info and useful links for Storybook and react

In storybook there are addons allowing you to view your component stories as raw html, have basic accessibility checks, link to the relevant designs within Figma, and more.

<!-- Co-op Storybook stories are broken into the following groups:
- Foundations - for foundation packages
- Elements - for element react/html packages
- Components - for component packages, (can be made from one or more element packages) -->
<!-- - (tbc) Patterns -->

#### Useful links

- [Storybook react docs](https://storybook.js.org/docs/react/get-started/introduction)
- [Component Story Format](https://storybook.js.org/docs/react/api/csf)
- [Storybook react mdx docs](https://storybook.js.org/docs/react/writing-docs/mdx)
- [Storybook react mdx api docs](https://storybook.js.org/docs/react/api/mdx)
- [MDX - Official site and docs](https://mdxjs.com/)
- [React - Getting Started](https://reactjs.org/docs/getting-started.html)
- [Jest docs](https://jestjs.io/docs/en/getting-started)
- [componentdriven.org](https://www.componentdriven.org/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
