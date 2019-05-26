import React from "react";

const MoviesList = props => {
  const items = props.movies.map(item => {
    return (
      <div key={item.imdbID}>
        <div>{item.Year}</div>
        <div>{item.Title}</div>
      </div>
    );
  });
  return <div>{items.length}</div>;
};
export default MoviesList;
