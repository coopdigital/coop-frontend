import componentBuild from './componentBuild.js';
import cssBuild from './cssBuild.js';
import getPackageContents from './getPackageContents.js';

export default function build() {
  const packageDirectory = process.cwd();
  const packageJsonContents = getPackageContents(packageDirectory);

  if (packageJsonContents === null) {
    return [];
  }

  const buildConfig = [];
  const componentConfig = componentBuild(packageDirectory, packageJsonContents);
  const cssConfig = cssBuild(packageDirectory, packageJsonContents);

  if (componentConfig) buildConfig.push(componentConfig);
  if (cssConfig) buildConfig.push(cssConfig);

  return buildConfig;
}
