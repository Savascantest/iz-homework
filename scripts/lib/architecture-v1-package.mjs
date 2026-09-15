export const IZ_ARCHITECTURE_V1_EFFECTIVE_DATE = '2026-09-14';
export const IZ_POLICY_VERSION = 'iz-lesson-based-reinforcement@1';
export const IZ_TEMPLATE_CONTRACT_VERSION = 'iz-seven-section-interactive@1';
export const IZ_ASSESSMENT_POLICY_VERSION = 'iz-ten-question-feedback@1';
export const IZ_FINAL_QUIZ_QUESTION_COUNT = 10;
export const IZ_SCORE_THRESHOLD = null;
export const IZ_SCORES_AUTOMATICALLY_ESTABLISH_MASTERY = false;

const REQUIRED_SECTIONS = [
  ['notes', 'Lesson Notes'],
  ['grammar', 'Grammar'],
  ['vocabulary', 'Vocabulary'],
  ['practice', 'Practice'],
  ['reading', 'Reading'],
  ['listening', 'Listening'],
  ['quiz', 'Final Quiz'],
];

export function isFutureIzArchitectureV1Package(pkg) {
  return typeof pkg?.date === 'string' && pkg.date >= IZ_ARCHITECTURE_V1_EFFECTIVE_DATE;
}

export function isValidNoHomeworkOutcome(outcome) {
  return outcome?.outcome === 'NO_HOMEWORK' && outcome.publicPackageCreated === false;
}

export function isPrivacySafeFutureIzPackageId(id, date) {
  return typeof id === 'string' && typeof date === 'string' && new RegExp(`^${date}-[a-z0-9]{10,24}$`).test(id);
}

function addQuestionViolations(questions, label, violations) {
  if (!Array.isArray(questions)) {
    violations.push(`${label}: must be an array`);
    return;
  }
  const prompts = new Set();
  const ids = new Set();
  questions.forEach((question, index) => {
    const path = `${label}[${index}]`;
    if (!question || typeof question !== 'object') {
      violations.push(`${path}: must be an object`);
      return;
    }
    if (typeof question.q !== 'string' || !question.q.trim()) violations.push(`${path}.q: prompt is required`);
    else if (prompts.has(question.q.trim())) violations.push(`${path}.q: duplicate prompt in the same question set`);
    else prompts.add(question.q.trim());
    if (!Array.isArray(question.opt) || question.opt.length < 2 || question.opt.some((option) => typeof option !== 'string' || !option.trim())) {
      violations.push(`${path}.opt: must contain at least two non-empty choices`);
    }
    if (!Number.isInteger(question.a) || !Array.isArray(question.opt) || question.a < 0 || question.a >= question.opt.length) {
      violations.push(`${path}.a: must be a valid option index`);
    }
    if (question.id !== undefined) {
      if (typeof question.id !== 'string' || !question.id.trim()) violations.push(`${path}.id: must be a non-empty string when present`);
      else if (ids.has(question.id)) violations.push(`${path}.id: duplicate question ID in the same question set`);
      else ids.add(question.id);
    }
  });
}

function hasObviousFixedPattern(positions) {
  for (let period = 2; period <= Math.min(4, Math.floor(positions.length / 2)); period += 1) {
    if (positions.every((position, index) => position === positions[index % period])) return true;
  }
  return false;
}

function addAnswerDistributionViolations(questions, label, violations) {
  const groups = new Map();
  questions.forEach((question) => {
    if (!Array.isArray(question?.opt) || !Number.isInteger(question?.a) || question.a < 0 || question.a >= question.opt.length) return;
    const positions = groups.get(question.opt.length) || [];
    positions.push(question.a);
    groups.set(question.opt.length, positions);
  });
  for (const [choiceCount, positions] of groups) {
    if (positions.length < 8) continue;
    const counts = Array.from({ length: choiceCount }, (_, position) => positions.filter((answer) => answer === position).length);
    if (counts.some((count) => count === positions.length)) violations.push(`${label}: all correct answers use one option position`);
    else if (Math.max(...counts) > Math.ceil(positions.length * 0.6)) violations.push(`${label}: one answer position is materially dominant`);
    else if (hasObviousFixedPattern(positions)) violations.push(`${label}: answer positions use an obvious fixed pattern`);
  }
}

function addSectionViolations(pkg, violations) {
  if (!Array.isArray(pkg.sections) || pkg.sections.length !== REQUIRED_SECTIONS.length) {
    violations.push('sections: must contain the seven-section İz contract');
    return;
  }
  const byId = new Map(pkg.sections.map((section) => [section?.id, section]));
  for (const [id, label] of REQUIRED_SECTIONS) {
    const section = byId.get(id);
    if (!section) {
      violations.push(`sections.${id}: required by the seven-section İz contract`);
      continue;
    }
    if (section.label !== label) violations.push(`sections.${id}.label: must equal ${label}`);
    if (Array.isArray(section.questions)) {
      addQuestionViolations(section.questions, `sections.${id}.questions`, violations);
      addAnswerDistributionViolations(section.questions, `sections.${id}.questions`, violations);
    }
    if (Array.isArray(section.readings)) {
      section.readings.forEach((reading, index) => {
        if (!reading || typeof reading !== 'object') violations.push(`sections.${id}.readings[${index}]: must be an object`);
        else if (reading.questions !== undefined) addQuestionViolations(reading.questions, `sections.${id}.readings[${index}].questions`, violations);
      });
    }
  }
  const quiz = byId.get('quiz');
  if (!Array.isArray(quiz?.questions) || quiz.questions.length !== IZ_FINAL_QUIZ_QUESTION_COUNT) {
    violations.push(`sections.quiz.questions: must contain the ${IZ_FINAL_QUIZ_QUESTION_COUNT}-question Final Quiz default`);
  }
}

export function findIzArchitectureV1Violations(pkg) {
  if (!isFutureIzArchitectureV1Package(pkg)) return [];
  const violations = [];
  for (const [field, expected] of Object.entries({
    policyVersion: IZ_POLICY_VERSION,
    templateContractVersion: IZ_TEMPLATE_CONTRACT_VERSION,
    assessmentPolicyVersion: IZ_ASSESSMENT_POLICY_VERSION,
  })) {
    if (pkg[field] !== expected) violations.push(`${field}: must equal ${expected}`);
  }
  if (!isPrivacySafeFutureIzPackageId(pkg.id, pkg.date)) violations.push('id: must use the privacy-safe YYYY-MM-DD-opaque-suffix format');
  addSectionViolations(pkg, violations);
  return violations;
}

export function assertIzArchitectureV1Package(pkg, label = 'homework package') {
  const violations = findIzArchitectureV1Violations(pkg);
  if (violations.length) throw new Error(`${label} violates İz Architecture v1: ${violations.join(', ')}`);
}
