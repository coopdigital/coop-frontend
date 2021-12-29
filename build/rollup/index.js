import reactBuild from './reactBuild.js';
import cssBuild from './cssBuild.js';
import getPackageContents from './getPackageContents.js';

export default function build() {
  const packageDirectory = process.cwd();
  const packageJsonContents = getPackageContents(packageDirectory);

  if (!packageJsonContents) {
    console.log('Error in finding or parsing the package.json of the package');
    return [];
  }

  const buildConfig = [];
  const reactConfig = reactBuild(packageDirectory, packageJsonContents);
  const cssConfig = cssBuild(packageDirectory, packageJsonContents);

  if (reactConfig) buildConfig.push(reactConfig);
  if (cssConfig) buildConfig.push(cssConfig);

  return buildConfig;
}
