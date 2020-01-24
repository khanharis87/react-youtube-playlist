import React from "react";

const VideoPlayer = props => {
  const { id, playlist } = props;
  return (
    <div>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=https://7spdn.csb.app&playlist=${playlist}`}
      />
    </div>
  );
};

export default VideoPlayer;
