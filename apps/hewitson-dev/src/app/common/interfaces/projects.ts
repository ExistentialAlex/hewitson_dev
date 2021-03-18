export interface Project {
  id: string;
  title: string;
  description: string;
  mdFile: string;
  tags?: Tag[];
  img?: string;
}

export interface Tag {
  name: string;
  colour: string;
  textColour: string;
  logo?: string;
}
