import React from "react";

function SearchBar({ keyword, setKeyword }) {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Cari catatan..."
      className="search-bar"
    />
  );
}

export default SearchBar;
