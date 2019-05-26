import React from "react";

const MovieItem = ({ item }) => {
  return (
    <div>
      <div>{item.Year}</div>
      <div>{item.Title}</div>
      <img src={item.Poster} alt="thumbnail" />
    </div>
  );
};

export default MovieItem;
