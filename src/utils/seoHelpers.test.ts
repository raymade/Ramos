import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatSEOTitle,
  formatSEODescription,
  resolveCanonicalUrl,
  generateProjectJsonLd,
  DEFAULT_BRAND_NAME,
} from './seoHelpers.ts';

test('formatSEOTitle appends brand name to standalone page title', () => {
  const title = formatSEOTitle('UI/UX Design Services');
  assert.equal(title, `UI/UX Design Services – ${DEFAULT_BRAND_NAME}`);
});

test('formatSEOTitle preserves existing brand name to avoid duplication', () => {
  const existing = `${DEFAULT_BRAND_NAME} – Portfolio & Design Studio`;
  assert.equal(formatSEOTitle(existing), existing);
});

test('formatSEOTitle handles empty input with default branded title', () => {
  assert.equal(formatSEOTitle(''), `${DEFAULT_BRAND_NAME} – Portfolio & Design Studio`);
});

test('formatSEODescription preserves standard descriptions under 160 chars', () => {
  const desc = 'Discover distinctive mobile banking interfaces and modern brand systems.';
  assert.equal(formatSEODescription(desc), desc);
});

test('formatSEODescription trims long descriptions to 160 characters with ellipsis', () => {
  const longDesc =
    'This is a very comprehensive and extensive description of our creative design studio services that easily exceeds the recommended one hundred and sixty character limit for Google search snippets.';
  const formatted = formatSEODescription(longDesc);
  assert.ok(formatted.length <= 160);
  assert.ok(formatted.endsWith('...'));
});

test('resolveCanonicalUrl constructs valid absolute URLs', () => {
  const url = resolveCanonicalUrl('/work', 'https://example.com');
  assert.equal(url, 'https://example.com/work');

  const rootUrl = resolveCanonicalUrl('/', 'https://example.com');
  assert.equal(rootUrl, 'https://example.com/');
});

test('generateProjectJsonLd creates valid Schema.org CreativeWork representation', () => {
  const jsonLd = generateProjectJsonLd({
    title: 'Fintech Mobile Experience',
    shortDescription: 'Modern mobile banking application.',
    category: 'Mobile App Design',
    year: '2026',
    services: ['UI Design', 'Interaction Design'],
  });

  assert.equal(jsonLd['@context'], 'https://schema.org');
  assert.equal(jsonLd['@type'], 'CreativeWork');
  assert.equal(jsonLd.name, 'Fintech Mobile Experience');
  assert.equal(jsonLd.creator.name, 'Ramos Friday Oluwaseun');
  assert.equal(jsonLd.keywords, 'UI Design, Interaction Design');
});
