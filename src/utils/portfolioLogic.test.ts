import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  generateWhatsAppLink,
  filterProjects,
  getAdjacentProjects,
  getSliderNextIndex,
  getSliderPrevIndex,
} from './portfolioLogic.ts';
import type { Project } from './portfolioLogic.ts';

const mockProjects: Project[] = [
  {
    slug: 'fintech-app',
    title: 'Fintech App',
    category: 'UI/UX Design',
    categoryTag: 'UI/UX Design',
    shortDescription: 'Modern fintech',
    isFeatured: true,
    isConcept: true,
    coverImage: '/img1.jpg',
    clientOrContext: 'Concept',
    year: '2026',
    services: ['UI Design'],
    tools: ['Figma'],
    challenge: 'Simplify transfers',
    objectives: ['Clarity'],
    approach: 'User testing',
    wireframesAndProcess: 'Iterations',
    solution: 'Clean design',
  },
  {
    slug: 'urban-brand',
    title: 'Urban Brand',
    category: 'Branding',
    categoryTag: 'Branding',
    shortDescription: 'Brand identity',
    isFeatured: true,
    isConcept: true,
    coverImage: '/img2.jpg',
    clientOrContext: 'Concept',
    year: '2026',
    services: ['Logo', 'Guidelines'],
    tools: ['Illustrator'],
    challenge: 'Iconic look',
    objectives: ['Bold presence'],
    approach: 'Sketches',
    wireframesAndProcess: 'Refinements',
    solution: 'Monochrome identity',
  },
  {
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'Web Design',
    categoryTag: 'Web Design',
    shortDescription: 'Analytics console',
    isFeatured: false,
    isConcept: true,
    coverImage: '/img3.jpg',
    clientOrContext: 'Concept',
    year: '2026',
    services: ['UX', 'Data viz'],
    tools: ['Figma'],
    challenge: 'Information density',
    objectives: ['Scannability'],
    approach: 'Component library',
    wireframesAndProcess: 'Card testing',
    solution: 'Modular layout',
  },
];

test('validateContactForm rejects empty form with detailed error keys', () => {
  const result = validateContactForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.serviceRequired);
  assert.ok(result.errors.projectDescription);
});

test('validateContactForm accepts valid form data', () => {
  const result = validateContactForm({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    serviceRequired: 'UI/UX Design',
    projectDescription: 'We are looking for a complete redesign of our customer onboarding flow.',
    budgetRange: '$3,000 - $5,000',
    desiredTimeline: '4 - 6 weeks',
    preferredContactMethod: 'whatsapp',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateContactForm catches invalid email format', () => {
  const result = validateContactForm({
    fullName: 'Jane Doe',
    email: 'invalid-email-string',
    serviceRequired: 'UI/UX Design',
    projectDescription: 'Need a great mobile design.',
    budgetRange: '$2,000+',
    desiredTimeline: '1 month',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
});

test('generateWhatsAppLink encodes message and preserves verified business phone +234 706 933 4173', () => {
  const link = generateWhatsAppLink('+234 706 933 4173', 'UI/UX Design', 'Sarah Smith');
  assert.ok(link.startsWith('https://wa.me/2347069334173?text='));
  assert.ok(link.includes(encodeURIComponent('RAMZY_SN@ALL')));
  assert.ok(link.includes(encodeURIComponent('Sarah Smith')));
  assert.ok(link.includes(encodeURIComponent('UI/UX Design')));
});

test('filterProjects correctly handles All Projects and specific categories', () => {
  const all = filterProjects(mockProjects, 'All Projects');
  assert.equal(all.length, 3);

  const branding = filterProjects(mockProjects, 'Branding');
  assert.equal(branding.length, 1);
  assert.equal(branding[0].slug, 'urban-brand');

  const empty = filterProjects(mockProjects, 'Mobile App Design');
  assert.equal(empty.length, 0);
});

test('getAdjacentProjects cycles properly through items', () => {
  const firstAdj = getAdjacentProjects(mockProjects, 'fintech-app');
  assert.equal(firstAdj.prev?.slug, 'saas-dashboard');
  assert.equal(firstAdj.next?.slug, 'urban-brand');

  const midAdj = getAdjacentProjects(mockProjects, 'urban-brand');
  assert.equal(midAdj.prev?.slug, 'fintech-app');
  assert.equal(midAdj.next?.slug, 'saas-dashboard');
});

test('slider circular index navigation wraps accurately', () => {
  assert.equal(getSliderNextIndex(0, 4), 1);
  assert.equal(getSliderNextIndex(3, 4), 0);
  assert.equal(getSliderPrevIndex(0, 4), 3);
  assert.equal(getSliderPrevIndex(2, 4), 1);
});
