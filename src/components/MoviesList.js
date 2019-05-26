import React from "react";
import MovieItem from "./Movie_List_item";
const MoviesList = props => {
  const items = props.movies.map(item => {
    //console.log(props);
    return <MovieItem item={item} key={item.imdbID} />;
  });
  return <div>{items}</div>;
};
export default MoviesList;
