import React from "react";
import "../../App.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  goPrev: () => void;
  goNext: () => void;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  goPrev,
  goNext,
  setPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button onClick={goPrev} disabled={page === 1} className="page-btn">
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`page-number ${page === p ? "active" : ""}`}
        >
          {p}
        </button>
      ))}

      <button onClick={goNext} disabled={page === totalPages} className="page-btn">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
