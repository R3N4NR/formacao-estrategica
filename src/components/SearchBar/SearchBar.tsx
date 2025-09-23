import React from "react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div style={{ width: 300, margin: "20px auto" }}>
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
          color: "#333",
          fontSize: 16,
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default SearchBar;
