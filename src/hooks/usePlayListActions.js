import React from "react";

function usePlayListActions() {
  const [playlist, setPlaylist] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState("");

  function addToPlaylist(video) {
    setPlaylist(playlist =>
      playlist.concat({
        title: video.title,
        id: video.id,
        imgSrc: video.imgSrc
      })
    );
  }

  function removeVideo(id) {
    const filterPlaylist = playlist.filter(item => item.id !== id);
    setPlaylist(filterPlaylist);
  }

  function selectItemFromPlaylist(id) {
    if (document.getElementById("player")) {
      document.getElementById("player").setAttribute(
        "src",
        `https://www.youtube.com/embed/${id}
      `
      );
    }

    setSelectedVideo(id);
  }

  return {
    addToPlaylist,
    removeVideo,
    selectedVideo,
    playlist,
    selectItemFromPlaylist
  };
}

export default usePlayListActions;
