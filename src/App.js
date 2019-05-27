import React, { Component } from "react";
import axios from "axios";
//Components
import Header from "./components/header";
import Checkbox from "./components/checkbox";

//styles
import globalStyles from "./global2.sass";

class App extends Component {
  state = {
    checkedBox: "",
    movie: [],
    movies: [],
    filtered: []
  };

  componentDidMount = video => {
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
      })
      .catch(e => {
        console.error(e);
      });
  };

  getkeywords = e => {
    if (e.target.value !== "") {
      let video = e.target.value;
      this.componentDidMount(video);
    } else {
    }
  };

  render() {
    ///console.log("componentDidMount: ", this.componentDidMount);
    return (
      <div className="dude">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
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
