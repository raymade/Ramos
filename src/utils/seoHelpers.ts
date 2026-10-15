export const DEFAULT_BRAND_NAME = 'RAMZY_SN@ALL';
export const DEFAULT_DESCRIPTION =
  'Thoughtful Design. Meaningful Experiences. UI/UX design, digital products, visual identity, and graphic design by Ramos Friday Oluwaseun.';
export const DEFAULT_IMAGE = '/src/assets/images/hero_design_showcase_1792075694237.jpg';

/**
 * Formats a clean, branded page title (30–60 characters guideline)
 */
export function formatSEOTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle.trim() === '') {
    return `${DEFAULT_BRAND_NAME} – Portfolio & Design Studio`;
  }
  // If the title already includes the brand name, don't duplicate it
  if (pageTitle.includes(DEFAULT_BRAND_NAME)) {
    return pageTitle.trim();
  }
  return `${pageTitle.trim()} – ${DEFAULT_BRAND_NAME}`;
}

/**
 * Normalizes meta description (ideal search snippet length ~120-160 characters)
 */
export function formatSEODescription(description?: string): string {
  if (!description || description.trim() === '') {
    return DEFAULT_DESCRIPTION;
  }
  const clean = description.trim().replace(/\s+/g, ' ');
  if (clean.length > 160) {
    return `${clean.slice(0, 157)}...`;
  }
  return clean;
}

/**
 * Resolves full canonical URL
 */
export function resolveCanonicalUrl(path = '/', origin = ''): string {
  const base = origin || (typeof window !== 'undefined' ? window.location.origin : 'https://ramzy-studio.com');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

/**
 * Generates JSON-LD for CreativeWork or Service case study
 */
export function generateProjectJsonLd(project: {
  title: string;
  shortDescription: string;
  category: string;
  year: string;
  services: string[];
  coverImage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.shortDescription,
    genre: project.category,
    dateCreated: project.year,
    creator: {
      '@type': 'Person',
      name: 'Ramos Friday Oluwaseun',
      brand: DEFAULT_BRAND_NAME,
    },
    keywords: project.services.join(', '),
  };
}
