import React from "react";

function useFetchSearchResults(searchInput) {
  const [loading, setLoading] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState("");

  React.useEffect(() => {
    window.gapi.load("client", () => {
      gapi.client.init({
        apiKey: "AIzaSyDL6oT3SxLUmgQogiUz6R8Xb3BHQqOA0F8",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
        ]
      });
    });
  }, []);

  async function searchRequest() {
    setLoading(true);
    try {
      const request = await gapi.client.youtube.search.list({
        part: "snippet",
        q: searchInput,
        type: "video"
      });
      const response = JSON.parse(request.body);
      const refinedResponse = response.items.map(response => {
        return {
          title: response.snippet.title,
          id: response.id.videoId,
          imgSrc: response.snippet.thumbnails.high.url
        };
      });
      setSearchResult(refinedResponse);
      setLoading(false);
    } catch (e) {
      console.error("ERROR:", e);
    }
  }

  return { loading, searchRequest, searchResult };
}

export default useFetchSearchResults;
