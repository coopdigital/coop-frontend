# Workbench

## To run local development

```bash
yarn run dev
```
Navigate to ```localhost:3000/workbench```


## Building

> #### Ensure that you've ``` yarn install ``` in the _root_ of this repository first. 

This will ensure that all packages, local or hosted on npm, will be available to the workbench. 
workbench/package.json will contains dependencies that havef their version as "*", this will ensure that we're pulling the packages from the shared node_modules folder in the root. 


## Eslint issues

At present there are two eslintrc files, in root and within workbench. Currently when running linting in workbench it'll read config from both files. The next specific one within workbench will help remove un-needed rules that are centered around Next, but you can forsee issues arising where this doesn't all instances. This would mean the root eslintrc will be blocking the build step of the workbench for issues that aren't applicable within the next context. 


> #### Temporary workaround: in the root eslintrc, we've added ```ignorePatterns: ['workbench/**/*.js'] ``` which ignores the files within workbench. This hopefully means that the root eslintrc file doesn't apply but the workbench eslintrc still does. However we've not yet verified this is the case
