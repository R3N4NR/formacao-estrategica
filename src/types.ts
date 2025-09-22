// types.ts

export interface ContentData {
  header: {
    title: string;
    buttonText: string;
    buttonRecommendedText: string;
  };
  apresentacao: {
    mainTitle: string;
    subtitle: string;
    date: string;
    imageAlt: string;
  };
  sections: Section[];
}
export interface Section {
  linkCurso: string;
  sectionTitle: string;
  sectionText: string;
  carousel: Slide[]; 
}

export type Slide =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string };
