//https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-reactjs
//https://codepen.io/anon/pen/wbXpBK
import React, { Component } from "react";
import MoviesList from "./MoviesList";

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checkedBox: "",
      movies: [],
      currentPage: 1,
      moviesPerPage: 3
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePaginatorChange = this.handlePaginatorChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ checkedBox: value });
    this.filter(value, checked);
    //1. paginator feature
  }
  handlePaginatorChange(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  filter(value, checked) {
    let arr = this.props.movies;
    //console.log(arr);
    const result = arr.filter(item => {
      return item.Type === value;
    });
    //console.log(result);
    this.setState({ movies: result });
  }

  render() {
    //console.log("the movies state", this.state.movies);
    //2. Logic for displaying movies paginator
    const { movies, currentPage, moviesPerPage } = this.state;

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const renderMovies = currentMovies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });

    //3. Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handlePaginatorChange}>
          {number}
        </li>
      );
    });
    //3. Logic for displaying page numbers
    console.log("the movies state", indexOfLastMovie);
    return (
      <div>
        <label>
          <input
            type="radio"
            name="vidType"
            value="movie"
            checked={this.state.checkedBox === "movie"}
            onChange={this.handleChange}
          />{" "}
          Movie
        </label>

        <label>
          <input
            type="radio"
            name="vidType"
            value="series"
            checked={this.state.checkedBox === "series"}
            onChange={this.handleChange}
          />{" "}
          Serie
        </label>
        {/* <ul>{renderMovies}</ul> */}
        <MoviesList movies={this.state.movies} type={this.state.checkedBox} />
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );

    /*   return (
      <div>
        <label>
          <input
            type="radio"
            name="vidType"
            value="movie"
            checked={this.state.checkedBox === "movie"}
            onChange={this.handleChange}
          />{" "}
          Movie
        </label>

        <label>
          <input
            type="radio"
            name="vidType"
            value="series"
            checked={this.state.checkedBox === "series"}
            onChange={this.handleChange}
          />{" "}
          Serie
        </label>

        <br />
        <MoviesList movies={this.state.movies} type={this.state.checkedBox} />
      </div>
    );
 */
  }
}
export default Checkbox;
