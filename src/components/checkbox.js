import React, { Component } from "react";

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checkedBox: "movie"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  filter(value) {
    console.log(value);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ checkedBox: value });
    //console.log(value);
    this.filter(value);
    /* let movies = this.props.movies; */
  }

  render() {
    //console.log(this.props);
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
