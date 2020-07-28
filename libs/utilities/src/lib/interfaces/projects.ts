export interface Project {
  id: string;
  title: string;
  description: string;
  img?: string;
  mdFile: string;
  tags?: string[];
}

export interface Tag {
  id: string;
  name: string;
  colour: string;
  textColour: string;
}
