import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import {
  assertPublicPackagePrivacy,
  findPublicPackagePrivacyViolations,
} from '../scripts/lib/public-package-privacy.mjs';

const safePackage = {
  id: '2026-08-26-E7FC178B',
  date: '2026-08-26',
  title: 'Games and clear meanings',
  lessonNotes: 'Your teacher introduced useful game vocabulary in this lesson.',
  resources: [{ label: 'Public listening source', url: 'https://example.org/listening' }],
  sections: [],
};

function privateFieldFixture(path, value = 'private value') {
  const parts = path.split('.');
  const fixture = structuredClone(safePackage);
  let target = fixture;
  for (const part of parts.slice(0, -1)) {
    target[part] = {};
    target = target[part];
  }
  target[parts.at(-1)] = value;
  return fixture;
}

test('the repaired historical İz package is public-private safe', async () => {
  const packageData = JSON.parse(await readFile(new URL('../public/homeworks/2026-08-26-E7FC178B/homework.json', import.meta.url)));
  assert.deepEqual(findPublicPackagePrivacyViolations(packageData), []);
});

test('normal learner-facing content and public listening URLs remain valid', () => {
  assert.doesNotThrow(() => assertPublicPackagePrivacy(safePackage));
});

test('ordinary learner-facing uses of teacher, lesson, and source remain valid', () => {
  assert.doesNotThrow(() => assertPublicPackagePrivacy({
    ...safePackage,
    explanation: 'Ask your teacher to discuss the lesson and use the listening source.',
  }));
});

for (const [name, path, value] of [
  ['root meetingUuid', 'meetingUuid'],
  ['nested meetingUuid', 'evidence.meetingUuid'],
  ['meetingId', 'meetingId'],
  ['UUID-shaped value under a non-private key', 'reference', '11111111-2222-4333-8444-555555555555'],
  ['root teacherNote', 'teacherNote'],
  ['nested teacherNote', 'private.teacherNote'],
  ['transcript reference', 'evidence.transcriptPath'],
  ['private source reference', 'evidence.privateSourceReference'],
  ['private source lesson identifier', 'evidence.sourceLessonId'],
  ['LessonRecord reference', 'lessonRecordPath'],
  ['router state', 'routerState'],
  ['RouterRun data', 'routerRun'],
  ['ExecutionReceipt data', 'executionReceipt'],
  ['private planning data', 'privatePlanningNotes'],
  ['source hash', 'sourceHash'],
  ['private filesystem path', 'attachment.path', 'C:\\work\\private\\lesson.json'],
]) {
  test(`${name} is rejected`, () => {
    assert.throws(() => assertPublicPackagePrivacy(privateFieldFixture(path, value)), /prohibited private/);
  });
}

test('private package metadata in the public index is rejected', () => {
  assert.throws(() => assertPublicPackagePrivacy([{ ...safePackage, meetingId: 'private-id' }], 'public index'), /prohibited private/);
});
