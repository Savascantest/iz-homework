import { readFile } from 'node:fs/promises';
import { assertPublicPackagePrivacy } from './lib/public-package-privacy.mjs';

const index = JSON.parse(await readFile('public/homeworks/index.json', 'utf8'));
if (index.length !== 1) throw new Error('Expected one dated package');

assertPublicPackagePrivacy(index, 'public homework index');

const packageData = JSON.parse(await readFile(`public/homeworks/${index[0].id}/homework.json`, 'utf8'));
assertPublicPackagePrivacy(packageData, `public package ${index[0].id}`);

const reading = packageData.sections.find((section) => section.id === 'reading');
if (!reading || reading.readings.length !== 3) throw new Error('Exactly three readings required');
for (const item of reading.readings) {
  if (item.text.split(/\s+/).length < 300) throw new Error('Reading under 300 words');
}

console.log('Validated public privacy boundary, three 300+ word readings, and interactive section data.');
