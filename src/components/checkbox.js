import React, { Component } from "react";
import MoviesList from "./MoviesList";

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checkedBox: "",
      movies: []
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ checkedBox: value });
    this.filter(value, checked);
  }

  render() {
    console.log("the movies state", this.state.movies);
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
        <br />
        <MoviesList movies={this.state.movies} />
        <div>
          <h4>{this.state.title}</h4>
        </div>
      </div>
    );
  }
}
export default Checkbox;
