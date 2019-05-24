import React, { Component } from "react";
import axios from "axios";
//Components
import Header from "./components/header";
//import MoviesList from "./components/MoviesList";
import Checkbox from "./components/checkbox";
class App extends Component {
  state = {
    checkedBox: "",
    movie: [],
    movies: [],
    filtered: []
  };

  consulta = video => {
    const API_KEY = "7c4a7eaa";
    return axios
      .get(`http://www.omdbapi.com/?s=${video}&apikey=${API_KEY}`)
      .then(res => {
        let movies = res.data.Search;
        //console.log(movies);
        if (movies === undefined) {
        } else {
          this.setState({
            movies: movies
          });
        }
      });
  };

  getkeywords = e => {
    if (e.target.value !== "") {
      let video = e.target.value;
      this.consulta(video);
    } else {
    }
  };

  render() {
    //console.log("movies", this.state.Checkbox);
    return (
      <div>
        <Header keywords={this.getkeywords} />
        <Checkbox
          gender={this.state.gender}
          movies={this.state.movies}
          checkedBox={this.state.checkedBox}
        />
      </div>
    );
  }
}

export default App;
