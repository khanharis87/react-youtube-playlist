import React from "react";

const AppHeader = ({ value, handleChange }) => (
  <header className="header">
    <div className="header_column">
      <h3>
        <i style={{ color: "red" }} className="fab fa-youtube" />
        Youtube Playlist
      </h3>
    </div>
    <div header_column>
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder="search videos"
      />
    </div>
  </header>
);

export default AppHeader;
