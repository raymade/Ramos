import React, { useEffect } from 'react';
import {
  formatSEOTitle,
  formatSEODescription,
  resolveCanonicalUrl,
  DEFAULT_IMAGE,
} from '../utils/seoHelpers';

export interface SEOMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Reusable SEO Metadata component that dynamically updates document titles,
 * meta descriptions, OpenGraph tags, Twitter cards, canonical links, and Schema.org structured data.
 */
export const SEOMetadata: React.FC<SEOMetadataProps> = ({
  title,
  description,
  path = '/',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  structuredData,
}) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const formattedTitle = formatSEOTitle(title);
    const formattedDesc = formatSEODescription(description);
    const canonicalUrl = resolveCanonicalUrl(path);
    const absoluteImageUrl = ogImage.startsWith('http')
      ? ogImage
      : `${window.location.origin}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

    // 1. Update Document Title
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', formattedDesc);

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', formattedDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', absoluteImageUrl);
    setMetaTag('property', 'og:site_name', 'RAMZY_SN@ALL');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', formattedDesc);
    setMetaTag('name', 'twitter:image', absoluteImageUrl);

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Dynamic JSON-LD Structured Data
    if (structuredData) {
      const scriptId = 'seo-dynamic-jsonld';
      let jsonLdScript = document.getElementById(scriptId);
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = scriptId;
        jsonLdScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, path, ogType, ogImage, structuredData]);

  return null;
};
