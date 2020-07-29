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
  id: string;
  name: string;
  colour: string;
  textColour: string;
}
