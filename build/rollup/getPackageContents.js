import fs from 'fs';
import path from 'path';

export default function getPackageContents(packageDirectory) {
  const packageJsonPath = path.join(packageDirectory, 'package.json');
  try {
    const file = fs.readFileSync(packageJsonPath);
    const contents = JSON.parse(file);
    return contents;
  } catch {
    return null;
  }
}
