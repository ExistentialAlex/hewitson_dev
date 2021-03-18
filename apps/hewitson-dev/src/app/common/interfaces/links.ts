import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition as BrandIconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface Link {
  title: string;
  url: string;
  icon?: IconDefinition;
  position?: string;
}

export interface SocialLink {
  icon: BrandIconDefinition;
  url: string;
}
