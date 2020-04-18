# Developing foundation and component packages for the design system

## Installation
This repository uses [lerna](https://github.com/lerna/lerna) to automatically manage versioning of all the different packages. Install dependencies in the root of the repo:

 ```shell script
$ npm install
```

This will install lerna, then [bootstrap the local packages](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme).

## Adding a new package
Create a new branch. 

Make a copy of the [component-template](https://github.com/coopdigital/coop-frontend/tree/master/packages/component-template) following the README. Add your HTML and CSS.

Shared components use Jinja2 and will need a corresponding model in Contentful. For information on how and why to create these email matt.tyas@coop.co.uk.


## Testing the package in the design system
Create a page for the component in an [existing or new folder here](https://github.com/coopdigital/coop-frontend/tree/master/design-system/src/pattern-library/components). 

Then create a design pattern page in the [design system Contentful space](https://app.contentful.com/spaces/95z9ms2kvox3/entries?id=PqNCla0FvyJeggwp&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author&filters.0.key=__status&filters.0.val=published). For access email matt.tyas@coop.co.uk.

Publish the page then `cd design-system` and in your terminal and run `npm run server` to grab the latest data from Contentful. 

Open the `design-system/_data/contentful/spaces/design-system-content.yml` file and search for you page. Grab the page ID and add it to the component page you created in `{% if designPattern.sys.id == 'your page ID' %}`. Let the local design system build refresh.

You should then see your new page at - for example: localhost:9000/pattern-library/components/cards/product-card.html

Running the design system build will have copied your component to /_includes/pattern-library/components/my-component

You can then reference this in your component page as an include to render the component and the component as an HTML example in your page:
```HTML
{% include pattern-library/components/[my-component]/src/[my-component].html %}
```
If your component is ready to publish commit your files and open a pull request.

Once your pull request is merged you'll need to switch to master and pull.

## Publishing new versions
Creating and publishing new versions is only enabled on the master branch. To create and publish new versions, the following needs to be run by a user with write permissions to the @coopdigital npm registry.

```shell script
$ npm run publish
```

If you need permissions email matt.tyas@coop.co.uk

This should provide a prompt to update the version according to [semantic versioning](https://semver.org/) - note that cross-linked dependencies within the local packages will be updated automatically.

## To see changes in the live design system
As the package versions are updated by Lerna you'll need to also update the [design system package.json file](https://github.com/coopdigital/coop-frontend/blob/master/design-system/package.json) file to make sure the changes are reflected in the live site.


## Lefthook git hooks pre commit
[Lefthook](https://github.com/Arkweid/lefthook) is used to manage git hooks in the repo.  [Intro article to lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape?utm_source=lefthook).

Currently, only one pre-commit hook is setup. This runs stylelint against currently staged `.css` and `.pcss` files.