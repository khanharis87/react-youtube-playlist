import React from "react";

const PlayList = ({ playlist, handleRemove, handlePlaylistItemClick }) => {
  return (
    <React.Fragment>
      {playlist.map(playlistItem => (
        <div id={playlistItem.id} key={playlistItem.id}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handlePlaylistItemClick(playlistItem.id)}
          >
            <img src={playlistItem.imgSrc} alt="thumbnail" />
            <h5>{playlistItem.title}</h5>
          </div>
          <button onClick={() => handleRemove(playlistItem.id)}>
            <i class="fas fa-times" />
            Remove
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PlayList;
