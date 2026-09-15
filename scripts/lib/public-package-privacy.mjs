const PRIVATE_FIELD_NAMES = new Set([
  'meetinguuid',
  'meetingid',
  'meetingnumber',
  'teachernote',
  'teachernotes',
  'transcript',
  'transcriptitems',
  'transcriptid',
  'transcriptpath',
  'transcripthash',
  'sourcetranscriptpath',
  'sourceevidence',
  'sourcemeeting',
  'sourcemeetingid',
  'sourcemeetinguuid',
  'sourcelesson',
  'sourcelessonid',
  'sourceid',
  'sourcepath',
  'privatesource',
  'privatesourcereference',
  'privateevidence',
  'lessonrecord',
  'lessonrecordpath',
  'router',
  'routerstate',
  'routerrun',
  'executionreceipt',
  'receipt',
  'privateplanning',
  'privateplanningnotes',
  'planningnotes',
  'sourcehash',
  'contenthash',
  'privatepath',
  'privatefilesystempath',
]);

const PRIVATE_PATH_PATTERN = /(?:^|[\\/])work[\\/]private(?:[\\/]|$)|(?:^|[\\/])private[\\/](?:lesson|source|planning|evidence)(?:[\\/]|$)/i;
const UUID_PATTERN = /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/i;

export function normalizeFieldName(name) {
  return String(name).replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function fieldIsPrivate(name) {
  return PRIVATE_FIELD_NAMES.has(normalizeFieldName(name));
}

function valueIsPrivatePath(value) {
  return typeof value === 'string' && PRIVATE_PATH_PATTERN.test(value);
}

function valueIsUuidShaped(value) {
  return typeof value === 'string' && UUID_PATTERN.test(value);
}

export function findPublicPackagePrivacyViolations(value, path = '$') {
  const violations = [];

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      violations.push(...findPublicPackagePrivacyViolations(item, `${path}[${index}]`));
    });
    return violations;
  }

  if (!value || typeof value !== 'object') return violations;

  for (const [key, item] of Object.entries(value)) {
    const itemPath = `${path}.${key}`;
    if (fieldIsPrivate(key)) violations.push(`${itemPath}: prohibited private field`);
    if (valueIsPrivatePath(item)) violations.push(`${itemPath}: prohibited private filesystem path`);
    if (valueIsUuidShaped(item)) violations.push(`${itemPath}: prohibited UUID-shaped value`);
    violations.push(...findPublicPackagePrivacyViolations(item, itemPath));
  }

  return violations;
}

export function assertPublicPackagePrivacy(value, label = 'public package') {
  const violations = findPublicPackagePrivacyViolations(value);
  if (violations.length) throw new Error(`${label} contains prohibited private data:\n${violations.join('\n')}`);
}
