export interface Project {
  slug: string;
  title: string;
  category: string;
  categoryTag: 'UI/UX Design' | 'Mobile App Design' | 'Web Design' | 'Logo Design' | 'Branding' | 'Graphic Design';
  shortDescription: string;
  isFeatured: boolean;
  isConcept: boolean;
  coverImage: string;
  additionalImages?: string[];
  clientOrContext: string;
  year: string;
  services: string[];
  tools: string[];
  challenge: string;
  objectives: string[];
  approach: string;
  wireframesAndProcess: string;
  solution: string;
  results?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  scope: string[];
  workflow: string[];
  faqs: { question: string; answer: string }[];
  relatedCategory: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName?: string;
  serviceRequired: string;
  projectDescription: string;
  budgetRange: string;
  desiredTimeline: string;
  preferredContactMethod: 'whatsapp' | 'email';
  referenceLinks?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface SubmittedLead extends ContactFormData {
  id: string;
  createdAt: string;
  status: 'New' | 'In Discussion' | 'Proposal Sent' | 'Completed';
}

/**
 * Validates the contact/enquiry form
 */
export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.serviceRequired || data.serviceRequired === '') {
    errors.serviceRequired = 'Please select the primary service you require.';
  }

  if (!data.projectDescription || data.projectDescription.trim().length < 15) {
    errors.projectDescription = 'Please describe your project (minimum 15 characters) so we can prepare an accurate response.';
  }

  if (!data.budgetRange || data.budgetRange === '') {
    errors.budgetRange = 'Please select an estimated budget range.';
  }

  if (!data.desiredTimeline || data.desiredTimeline === '') {
    errors.desiredTimeline = 'Please select your target timeline.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates WhatsApp prefilled link with verified phone number format
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  service?: string,
  clientName?: string
): string {
  const cleanPhone = (phoneNumber || '2347069334173').replace(/[^0-9]/g, '');
  const serviceText = service ? service : 'a creative design project';
  const nameIntro = clientName ? ` My name is ${clientName.trim()}.` : '';
  const message = `Hello Ramos, I visited your RAMZY_SN@ALL portfolio and would like to discuss a design project.${nameIntro} Service required: ${serviceText}. Please let me know how we can proceed.`;
  
  const encodedMessage = encodeURIComponent(message);
  return cleanPhone ? `https://wa.me/${cleanPhone}?text=${encodedMessage}` : `https://wa.me/2347069334173?text=${encodedMessage}`;
}

/**
 * Filters projects by category
 */
export function filterProjects(projects: Project[], category: string): Project[] {
  if (!category || category === 'All Projects' || category === 'All Work') {
    return projects;
  }
  return projects.filter(
    (p) => p.categoryTag.toLowerCase() === category.toLowerCase() || p.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Finds project by slug
 */
export function getProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Calculates previous and next projects for navigation
 */
export function getAdjacentProjects(projects: Project[], currentSlug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}

/**
 * Computes next circular index for hero slider
 */
export function getSliderNextIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current + 1) % total;
}

/**
 * Computes previous circular index for hero slider
 */
export function getSliderPrevIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current - 1 + total) % total;
}
