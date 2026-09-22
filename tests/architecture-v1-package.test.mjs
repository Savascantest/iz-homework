import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import {
  IZ_ARCHITECTURE_V1_EFFECTIVE_DATE,
  IZ_ASSESSMENT_POLICY_VERSION,
  IZ_FINAL_QUIZ_QUESTION_COUNT,
  IZ_POLICY_VERSION,
  IZ_SCORE_THRESHOLD,
  IZ_SCORES_AUTOMATICALLY_ESTABLISH_MASTERY,
  IZ_TEMPLATE_CONTRACT_VERSION,
  assertIzArchitectureV1Package,
  findIzArchitectureV1Violations,
  isValidNoHomeworkOutcome,
} from '../scripts/lib/architecture-v1-package.mjs';
import { assertPublicPackagePrivacy } from '../scripts/lib/public-package-privacy.mjs';

const balancedPositions = [0, 1, 2, 3, 1, 3, 0, 2, 2, 0];
const sectionLabels = {
  notes: 'Lesson Notes', grammar: 'Grammar', vocabulary: 'Vocabulary', practice: 'Practice',
  reading: 'Reading', listening: 'Listening', quiz: 'Final Quiz',
};

function question(number, answer = 0, id = `q-${number}`) {
  return { id, q: `Question ${number}?`, opt: ['A', 'B', 'C', 'D'], a: answer, hint: 'Use the lesson notes.' };
}

function futurePackage() {
  return {
    id: '2026-09-14-a1b2c3d4e5', date: '2026-09-14', title: 'Future fixture', subtitle: 'Lesson-based reinforcement fixture.',
    policyVersion: IZ_POLICY_VERSION, templateContractVersion: IZ_TEMPLATE_CONTRACT_VERSION, assessmentPolicyVersion: IZ_ASSESSMENT_POLICY_VERSION,
    sections: [
      { id: 'notes', label: sectionLabels.notes, title: 'Notes' },
      { id: 'grammar', label: sectionLabels.grammar, title: 'Grammar' },
      { id: 'vocabulary', label: sectionLabels.vocabulary, title: 'Vocabulary' },
      { id: 'practice', label: sectionLabels.practice, title: 'Practice', questions: [question('practice')] },
      { id: 'reading', label: sectionLabels.reading, title: 'Reading', readings: [{ title: 'Reading', text: 'A manageable lesson-aligned text.', questions: [question('reading')] }] },
      { id: 'listening', label: sectionLabels.listening, title: 'Listening', external: { title: 'Public listening', url: 'https://example.org/listening' } },
      { id: 'quiz', label: sectionLabels.quiz, title: 'Quiz', questions: balancedPositions.map((answer, index) => question(index + 1, answer, `quiz-${index + 1}`)) },
    ],
  };
}

function expectViolation(mutator, expected) {
  const pkg = futurePackage();
  mutator(pkg);
  assert.throws(() => assertIzArchitectureV1Package(pkg), new RegExp(expected));
}

test('approved private-config values are represented by the future public contract', () => {
  assert.equal(IZ_ARCHITECTURE_V1_EFFECTIVE_DATE, '2026-08-27');
  assert.equal(IZ_POLICY_VERSION, 'iz-lesson-based-reinforcement@1');
  assert.equal(IZ_TEMPLATE_CONTRACT_VERSION, 'iz-seven-section-interactive@1');
  assert.equal(IZ_ASSESSMENT_POLICY_VERSION, 'iz-ten-question-feedback@1');
  assert.equal(IZ_FINAL_QUIZ_QUESTION_COUNT, 10);
  assert.equal(IZ_SCORE_THRESHOLD, null);
  assert.equal(IZ_SCORES_AUTOMATICALLY_ESTABLISH_MASTERY, false);
});

test('a complete seven-section future package passes without CEFR or a mastery threshold', () => {
  const pkg = futurePackage();
  assert.deepEqual(findIzArchitectureV1Violations(pkg), []);
  assert.equal(Object.hasOwn(pkg, 'cefr'), false);
  assert.doesNotThrow(() => assertIzArchitectureV1Package(pkg));
  assert.doesNotThrow(() => assertPublicPackagePrivacy(pkg));
});

test('future packages require only the approved İz metadata and reject other student contracts', () => {
  for (const [field, value] of [
    ['policyVersion', undefined], ['templateContractVersion', undefined], ['assessmentPolicyVersion', undefined],
    ['policyVersion', 'sumeyye-weekend-monday@1'], ['templateContractVersion', 'sumeyye-six-tab-interactive@1'], ['assessmentPolicyVersion', 'sumeyye-section-and-final-checks@1'],
    ['policyVersion', 'eugenia-lesson-based@1'], ['templateContractVersion', 'eugenia-interactive-hybrid@1'], ['assessmentPolicyVersion', 'eugenia-section-and-final-checks@1'],
    ['policyVersion', 'selin-lesson-based-retrieval@1'], ['templateContractVersion', 'selin-four-day-seven-tab@1'], ['assessmentPolicyVersion', 'selin-section-and-final-checks@1'],
    ['policyVersion', 'sefa-turkish-supported-a1-four-day@1'], ['templateContractVersion', 'sefa-four-day-six-section@1'], ['assessmentPolicyVersion', 'sefa-daily-mini-test-feedback@1'],
  ]) expectViolation((pkg) => { pkg[field] = value; }, field);
});

test('future seven-section structure and ten-question quiz default are enforced', () => {
  expectViolation((pkg) => { pkg.sections.pop(); }, 'seven-section');
  expectViolation((pkg) => { pkg.sections.find((section) => section.id === 'reading').id = 'extra'; }, 'sections.reading');
  expectViolation((pkg) => { pkg.sections.find((section) => section.id === 'quiz').questions.pop(); }, '10-question');
});

test('future structural and answer-quality safeguards fail closed without overconstraining small sets', () => {
  expectViolation((pkg) => { const quiz = pkg.sections.find((section) => section.id === 'quiz').questions; quiz[1].q = quiz[0].q; }, 'duplicate prompt');
  expectViolation((pkg) => { const quiz = pkg.sections.find((section) => section.id === 'quiz').questions; quiz[1].id = quiz[0].id; }, 'duplicate question ID');
  expectViolation((pkg) => { pkg.sections.find((section) => section.id === 'quiz').questions[0].opt = []; }, 'non-empty choices');
  expectViolation((pkg) => { pkg.sections.find((section) => section.id === 'quiz').questions[0].a = 9; }, 'valid option index');
  expectViolation((pkg) => { pkg.sections.find((section) => section.id === 'quiz').questions.forEach((item) => { item.a = 0; }); }, 'all correct answers');
  expectViolation((pkg) => { pkg.sections.find((section) => section.id === 'quiz').questions.forEach((item, index) => { item.a = index < 7 ? 0 : index - 7; }); }, 'materially dominant');
  expectViolation((pkg) => { pkg.sections.find((section) => section.id === 'quiz').questions.forEach((item, index) => { item.a = index % 2; }); }, 'obvious fixed pattern');
});

test('privacy-safe IDs, public listening URLs, teacher-authorized Turkish support, and privacy integration pass', () => {
  const pkg = futurePackage();
  pkg.languageSupport = { language: 'Turkish', authorization: 'explicit_teacher_instruction' };
  assert.doesNotThrow(() => assertIzArchitectureV1Package(pkg));
  assert.doesNotThrow(() => assertPublicPackagePrivacy(pkg));
  expectViolation((candidate) => { candidate.id = '2026-09-14-ABC'; }, 'privacy-safe');
  assert.throws(() => assertPublicPackagePrivacy({ ...pkg, teacherNote: 'private' }), /prohibited private/);
});

test('historical package remains valid without metadata, future requirements, or content changes', async () => {
  const historical = JSON.parse(await readFile(new URL('../public/homeworks/2026-08-26-E7FC178B/homework.json', import.meta.url)));
  assert.ok(historical.date < IZ_ARCHITECTURE_V1_EFFECTIVE_DATE);
  assert.deepEqual(findIzArchitectureV1Violations(historical), []);
  assert.equal(historical.id, '2026-08-26-E7FC178B');
});

test('NO_HOMEWORK is a private valid outcome and BrowserProgress remains browser-local', async () => {
  assert.equal(isValidNoHomeworkOutcome({ outcome: 'NO_HOMEWORK', publicPackageCreated: false }), true);
  assert.equal(isValidNoHomeworkOutcome({ outcome: 'NO_HOMEWORK', publicPackageCreated: true }), false);
  const app = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
  assert.match(app, /hw-progress-\$\{lesson\.id\}/);
  assert.match(app, /hw-mistakes-\$\{lesson\.id\}/);
});
