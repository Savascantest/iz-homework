import { readdir, readFile } from 'node:fs/promises';
import { assertIzArchitectureV1Package, isFutureIzArchitectureV1Package } from './lib/architecture-v1-package.mjs';
import { assertPublicPackagePrivacy } from './lib/public-package-privacy.mjs';

const index = JSON.parse(await readFile('public/homeworks/index.json', 'utf8'));
assertPublicPackagePrivacy(index, 'public homework index');

const directories = (await readdir('public/homeworks', { withFileTypes: true })).filter((entry) => entry.isDirectory());
if (directories.length !== index.length) throw new Error('Public homework index must include every package directory');

for (const entry of index) {
  const packageData = JSON.parse(await readFile(`public/homeworks/${entry.id}/homework.json`, 'utf8'));
  assertPublicPackagePrivacy(packageData, `public package ${entry.id}`);
  assertIzArchitectureV1Package(packageData, `public package ${entry.id}`);

  if (isFutureIzArchitectureV1Package(packageData)) continue;
  const reading = packageData.sections.find((section) => section.id === 'reading');
  if (!reading || reading.readings.length !== 3) throw new Error('Historical package must retain exactly three readings');
  for (const item of reading.readings) {
    if (item.text.split(/\s+/).length < 300) throw new Error('Historical reading under 300 words');
  }
}

console.log('Validated public privacy boundary, historical compatibility, and future İz Architecture v1 packages.');
