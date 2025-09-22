import { useState, useMemo, useEffect } from "react";
import rawData from "../../public/content.json";

export interface CarouselItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface Section {
  linkCurso: string;
  sectionTitle: string;
  sectionText: string;
  carousel: CarouselItem[];
}

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

export const useCourses = () => {
  const typedData: ContentData = rawData as unknown as ContentData;
  const sections = typedData.sections;

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // ajuste se quiser

  // Resetar página quando a query mudar
  useEffect(() => {
    setPage(1);
  }, [query]);

  const filteredSections = useMemo(() => {
    if (!query) return sections;
    const q = query.toLowerCase();
    return sections.filter((section) =>
      section.sectionTitle.toLowerCase().includes(q)
    );
  }, [query, sections]);

  const totalPages = Math.max(1, Math.ceil(filteredSections.length / itemsPerPage));

  const pagedSections = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredSections.slice(start, start + itemsPerPage);
  }, [filteredSections, page, itemsPerPage]);

  const goNext = () => setPage((p) => Math.min(p + 1, totalPages));
  const goPrev = () => setPage((p) => Math.max(p - 1, 1));

  return {
    pagedSections,
    query,
    setQuery,
    page,
    setPage,        // <-- agora retornamos setPage
    totalPages,
    goNext,
    goPrev,
    header: typedData.header,
    apresentacao: typedData.apresentacao,
  };
};
