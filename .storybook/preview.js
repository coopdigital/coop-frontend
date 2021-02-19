import "@coopdigital/foundations-vars";
import "@coopdigital/foundations-typography";
import "@coopdigital/foundations-global";

export const parameters = {
  options: {
    showRoots: true,
    storySort: {
      order: ['Docs', ['Intro'], 'Foundations', 'Elements', 'Component', 'Patterns', 'Layout'],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
    },
  },
}