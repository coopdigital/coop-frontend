import fs from 'fs';
import path from 'path';

export default function getPackageContents(packageDirectory) {
  const packageJsonPath = path.join(packageDirectory, 'package.json');
  try {
    const file = fs.readFileSync(packageJsonPath);
    const contents = JSON.parse(file);
    return contents;
  } catch {
    // eslint-disable-next-line no-console
    console.log('Error in finding or parsing the package.json of the package');
    return null;
  }
}
