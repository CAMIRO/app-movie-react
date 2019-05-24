import React, { Component } from "react";
import MoviesList from "./MoviesList";

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checkedBox: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  filter(value, checked) {
    let arr = this.props.movies;
    //console.log(arr);
    const result = arr.filter(item => {
      return item.Type === value;
    });
    return result;
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ checkedBox: value });
    this.filter(value, checked);
  }

  render() {
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
      </div>
    );
  }
}
export default Checkbox;
