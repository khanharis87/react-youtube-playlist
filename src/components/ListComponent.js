import React from "react";

const ListComponent = ({
  results,
  type,
  handleButtonClick,
  handleTitleAndImageClick
}) => {
  console.log(results, "RESULTS");
  return (
    <React.Fragment>
      {results.map(item => (
        <div className="search-result__item" key={item.id} id={item.id}>
          <div onClick={() => handleTitleAndImageClick(item.id)}>
            <img src={item.imgSrc} alt="thumbnail" />
            <h5>{item.title}</h5>
          </div>
          {type === "playlist" ? (
            <button onClick={() => handleButtonClick(item.id)}>
              <i class="fas fa-times" />
              Remove
            </button>
          ) : (
            <button onClick={() => handleButtonClick(item)}>
              <i style={{ color: "#B2D1C9" }} class="fas fa-plus" /> Add to
              playlist
            </button>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default ListComponent;
