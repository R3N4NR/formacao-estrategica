import React from "react";
import Carousel from "./Carousel";
import logo from "/logo.png";
import { useCourses } from "./hooks/useCourses";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import "./App.css";
import Pagination from "./components/Paginacao/Paginacao";

const App: React.FC = () => {
  const {
    pagedSections,
    query,
    setQuery,
    page,
    totalPages,
    setPage,
    goNext,
    goPrev,
    header,
    apresentacao,
  } = useCourses();

  return (
    <><div>
      {/* Header */}
      <header className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="Formação Estratégica Logo" className="logo" />
          </div>
          <div className="header-title">
            <h2>{header.title}</h2>
          </div>
        </div>
        <div className="tarja-azul">
          <span>Confira nossos cursos recomendados!</span>
        </div>
      </header>

      {/* Apresentação */}
      <section className="apresentacao-container">
        <div className="apresentacao-content">
          <div className="apresentacao-image-section">
            <img src="/apresentacao.png" alt={apresentacao.imageAlt} />
          </div>
          <div className="apresentacao-text-section">
            <h1 className="main-title">{apresentacao.mainTitle}</h1>
            <span className="subtitle">{apresentacao.subtitle}</span>
            <p className="date">{apresentacao.date}</p>
          </div>
        </div>
      </section>

      {/* Busca */}
      <div style={{ width: "300px", margin: "20px auto" }}>
        <input
          type="text"
          placeholder="Pesquisar um curso"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 15px",
            borderRadius: 9999,
            border: "none",
            outline: "none",
            backgroundColor: "#fff",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            marginBottom: 20,
          }} />
      </div>

      {/* Seções paginadas */}
      {pagedSections.map((section, idx) => (
        <section key={idx} className="content">
          <h3 className="section-title">{section.sectionTitle}</h3>

          {Array.isArray(section.carousel) && section.carousel.length > 0 && (
            <Carousel slides={section.carousel} />
          )}

          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {section.sectionText}
          </ReactMarkdown>

          <a
            href={section.linkCurso}
            className="linkCurso"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
          >
            <button className="ver-cursos-btn">Ir ao curso</button>
          </a>
        </section>
      ))}



    </div>
      <Pagination page={page}
        totalPages={totalPages}
        goPrev={goPrev}
        goNext={goNext}
        setPage={setPage} />
    </>
  );
};

export default App;
