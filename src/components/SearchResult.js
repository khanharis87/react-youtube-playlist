import React from "react";

const SearchResult = ({ results, handleClick }) => {
  return (
    <React.Fragment>
      {results.items.map(video => (
        <div
          className="search-result__item"
          key={video.id.videoId}
          id={video.id.videoId}
        >
          <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
          <h5>{video.snippet.title}</h5>
          <button onClick={() => handleClick(video)}>
            <i style={{ color: "#B2D1C9" }} class="fas fa-plus" /> Add to
            playlist
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default SearchResult;
