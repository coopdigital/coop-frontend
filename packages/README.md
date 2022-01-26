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

## Husky git hooks pre commit

[Husky](https://typicode.github.io/husky/#/) is used to manage git hooks in the repo.

What we use Husky for:

- Commit message: We use husky to run commitlint on your commit messages to help enforce the Conventional Commits standard.
- Pre push: We run `npm test` whenever you push to a branch to make sure we are not breaking anything as we go.

## Publishing new versions

If your package is ready to publish commit your files and open a pull request.

Once approved and merged - go to the [Actions tab](https://github.com/coopdigital/coop-frontend/actions) in Github. There are two workflows which you need to run.

If you need permissions email matt.tyas@coop.co.uk or michael.chadwick@coop.co.uk

### Versioning workflow

Run the Version workflow. This will assess the changes across packages and bump their version based on the conventional commits.

Steps in the workflow:

- Run the build and test scripts
- Run lerna version and check if there are any changes.
- Automatically tag a new versions of any changed packages.
- Create a tag, update the package changelog.md and push those changes to the repository using the `chore(release): publish` commit message.

### Publishing workflow

Once you have seen the commits and new tags pushed. Make sure that the versions picked were correct. You will then need to run the Publish workflow.

Steps in the workflow:

- Autheticate with Git and pull all the lastest tags.
- Detect the new versions from those tags.
- Authenticate with NPM and publish them.
