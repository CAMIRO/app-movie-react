import React from "react";

const MoviesList = props => {
  const items = props.movies.map(item => {
    return (
      <div>
        <div>{item.Type}</div>
        <div>{item.Title}</div>
      </div>
    );
  });
  return <div>{items}</div>;
};

export default MoviesList;
