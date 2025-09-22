
import React from "react";
import Carousel from "./Carousel";
import logo from "/logo.png";
import rawData from "../public/content.json";
import type { ContentData } from "./types";
import './App.css'
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
const typedData: ContentData = rawData as unknown as ContentData;

const App: React.FC = () => {
  return (
    <div>
      <header className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="Formação Estratégica Logo" className="logo" />
          </div>
          <div className="header-title">
            <h2>{typedData.header.title}</h2>
          </div>
        </div>
        <div className="tarja-azul">

          <span>Confira nossos cursos recomendados !</span>
        </div>
      </header>

      <section className="apresentacao-container">
        <div className="apresentacao-content">
          <div className="apresentacao-image-section">
            <img src="/apresentacao.png" alt={typedData.apresentacao.imageAlt} />
          </div>
          <div className="apresentacao-text-section">
            <h1 className="main-title">{typedData.apresentacao.mainTitle}</h1>
            <span className="subtitle">{typedData.apresentacao.subtitle}</span>
            <p className="date">{typedData.apresentacao.date}</p>
          </div>
        </div>
      </section>


      {typedData.sections.map((section, idx) => (
        <section key={idx} className="content">
          <h3 className="section-title">{section.sectionTitle}</h3>
          {Array.isArray(section.carousel) && section.carousel.length > 0 && (
            <Carousel slides={section.carousel} />
          )}
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {section.sectionText}
          </ReactMarkdown>
          <a href={section.linkCurso} className="linkCurso" target="_blank" rel="sponsored nofollow noopener noreferrer"><button className="ver-cursos-btn">Ir ao curso</button></a>

        </section>
      ))}

    </div>
  );
};

export default App;
