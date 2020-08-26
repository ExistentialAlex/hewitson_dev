export interface Project {
  id: string;
  title: string;
  description: string;
  mdFile: string;
  views: number;
  tags?: string[];
  img?: string;
}

export interface Tag {
  name: string;
  colour: string;
  textColour: string;
  logo?: string;
}
