import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Link {
  title: string;
  url: string;
  icon?: IconDefinition;
  position?: string;
}
