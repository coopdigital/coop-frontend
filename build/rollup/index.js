import reactBuild from './reactBuild.js';
import cssBuild from './cssBuild.js';
import getPackageContents from './getPackageContents.js';

export default function build() {
  const packageDirectory = process.cwd();
  const packageJsonContents = getPackageContents(packageDirectory);

  if (packageJsonContents === null) {
    return [];
  }

  const buildConfig = [];
  const reactConfig = reactBuild(packageDirectory, packageJsonContents);
  const cssConfig = cssBuild(packageDirectory, packageJsonContents);

  if (reactConfig) buildConfig.push(reactConfig);
  if (cssConfig) buildConfig.push(cssConfig);

  return buildConfig;
}
