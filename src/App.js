import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import AppHeader from "./components/AppHeader";
import ListComponent from "./components/ListComponent";

import useFetchSearchResults from "./hooks/useFetchSearchResults";
import usePlayListActions from "./hooks/usePlayListActions";

import "./styles.css";

function App() {
  const [searchInput, setSearchInput] = React.useState("");
  const { loading, searchRequest, searchResult } = useFetchSearchResults();
  const {
    addToPlaylist,
    removeVideo,
    selectedVideo,
    playlist,
    selectItemFromPlaylist
  } = usePlayListActions();

  React.useEffect(() => {
    if (searchInput) {
      searchRequest(searchInput);
    }
  }, [searchInput]);

  return (
    <main className="App">
      <AppHeader handleChange={setSearchInput} value={searchInput} />

      {selectedVideo && (
        <VideoPlayer
          id={selectedVideo}
          playlist={playlist.map(vid => vid.id)}
        />
      )}

      <div className="main-content">
        {loading && <p>...loading</p>}
        {!searchResult && playlist.length < 1 && (
          <h1 className="search-heading">
            Search for videos
            <i class="fas fa-search-plus" />
          </h1>
        )}
        <div>
          {searchResult && (
            <>
              <h4>Search Results</h4>

              <ListComponent
                handleButtonClick={addToPlaylist}
                results={searchResult}
              />
            </>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {playlist.length > 1 && (
            <>
              <h4>Playlist</h4>

              <ListComponent
                handleButtonClick={removeVideo}
                results={playlist}
                handleTitleAndImageClick={selectItemFromPlaylist}
                type="playlist"
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
