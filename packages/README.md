# Developing foundation and component packages for the design system

## Installation

This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. Install dependencies in the root of the repo:

```shell script
$ npm ci
```

This will install lerna, then [bootstrap the local packages](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme).

## Adding a new package

Create a new branch.

Make a copy of the [component-template](https://github.com/coopdigital/coop-frontend/tree/master/packages/component-template) following the README.

Add your HTML and CSS.

To preview the package in the design system during initial development you'll have to use NPM link.

```shell script
$ cd packages/component-[name]
$ npm link
$ cd ../../design-system
$ npm link @coopdigital/component-[name]
```

Shared components use Jinja2 and will need a corresponding model in Contentful. For information on how and why to create these email matt.tyas@coop.co.uk.

Developing components is done in the [examples section of the design system](https://coop-design-system.herokuapp.com/pattern-library/examples/index.html). Create a new page and link it from the index.html

```
---
layout: blank-full
id: examples
---

{% include pattern-library/components/component-name/dist/component-name.html %}
```

Include the component then preview it at http://0.0.0.0:9000/pattern-library/examples/components/component-name.html

## Amending a current package

Working on a current component does not need an NPM link. Once published we use lerna stream to build all the packages.

From the root of the coop-frontend run

```shell script
$ npm run build
```

Switching to the design system directory you can then run

```
$ npm run server
```

Changes will be made to the current packages will then be picked up.

## Troubleshooting

If you are getting errors go to the root of the coop-frontend repo and run:

```shell script
$ npm ci && npm run build
```

## Writing commit messages with Conventional Commits

Conventional commits is a specification on writing commit messages. These can help us categorise and visualise what commits are doings, for example is a commit fixing something, adding a new feature or just updating some docs. Most importantly we use the types to infer what version to bump our packages too when using our automated workflows.abs

[The docs](https://www.conventionalcommits.org/en/v1.0.0/#summary) go into the structure of the commits in more detail but here are some examples

```bash

# would fail validation
git commit -m "updating the README"

#  would pass validation
git commit -m "docs: updating the README"

#  would pass validation with adding scope of the issue number
git commit -m "docs(#429): updating the README"

```

The full structure of a commit would look something like. [See docs](https://www.conventionalcommits.org/en/v1.0.0/#examples)

```bash

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

The allowed types are

```bash

  build,
  chore,
  ci,
  docs,
  feat,
  fix,
  perf,
  refactor,
  revert,
  style,
  test,

```

## Creating a Contentful page for your component

To document your component. You'll need to create a new design system [like the date input page for example](https://coop-design-system.herokuapp.com/pattern-library/foundations/date-input.html) pattern page and link it to the design system Contenful space.

Create a page for the component in an [existing or new folder here](https://github.com/coopdigital/coop-frontend/tree/master/design-system/src/pattern-library/components).

Then create a design pattern page in the [design system Contentful space](https://app.contentful.com/spaces/95z9ms2kvox3/entries?id=PqNCla0FvyJeggwp&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author&filters.0.key=__status&filters.0.val=published). For access email matt.tyas@coop.co.uk.

Publish the page then `cd design-system` and in your terminal and run `npm run server` to grab the latest data from Contentful.

Open the `design-system/_data/contentful/spaces/design-system-content.yml` file and search for you page. Grab the page ID and add it to the component page you created in `{% if designPattern.sys.id == 'your page ID' %}`.

Let the local design system build refresh.

You should then see your new page at - for example: `0.0.0.0:9000/pattern-library/components/cards/product-card.html`

Running the design system build will have copied your component to `/_includes/pattern-library/components/my-component`

You can then reference this in your component page as an include to render the component and the component as an HTML example in your page:

```HTML
{% include pattern-library/components/[my-component]/dist/[my-component].html %}
```

## Publishing new versions

If your component is ready to publish commit your files and open a pull request.

Once approved - switch to master and pull the changes down.

Creating and publishing new versions is only enabled on the master branch. To create and publish new versions, the following needs to be run by a user with write permissions to the @coopdigital npm registry.

```shell script
$ npm run publish
```

If you need permissions email matt.tyas@coop.co.uk

This should provide a prompt to update the version according to [semantic versioning](https://semver.org/) - note that cross-linked dependencies within the local packages will be updated automatically.

## Husky git hooks pre commit

[Husky](https://typicode.github.io/husky/#/) is used to manage git hooks in the repo.

What we use Husky for:

- Commit message: We use husky to run commitlint on your commit messages to help enforce the Conventional Commits standard.
- Pre push: We run `npm test` whenever you push to a branch to make sure we are not breaking anything as we go.
