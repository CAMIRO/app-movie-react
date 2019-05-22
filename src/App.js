import React, { Component } from "react";
import Header from "./components/header";
import axios from "axios";

class App extends Component {
  state = {
    movie: [],
    movies: [],
    filtered: [],
    Director: ""
  };

  /* http://www.omdbapi.com/?t=hey&apikey=7c4a7eaa */
  /*   http://www.omdbapi.com/?t=${}&apikey=${API_KEY} */

  /* componentDidMount() {
    
    axios
      .get(`http://www.omdbapi.com/?t=${this.state.movies}&apikey=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        this.setState({ movies: res.data });
      });
  } */

  consulta = video => {
    const API_KEY = "7c4a7eaa";
    return axios
      .get(`http://www.omdbapi.com/?s=${video}&apikey=${API_KEY}`)
      .then(res => {
        this.setState({
          movies: res
        });
      });
  };

  getkeywords = e => {
    if (e.target.value !== "") {
      let video = e.target.value;
      let res = this.consulta(video);
    } else {
    }

    /* if (video !== "") {
      let filtered = this.state.movies.filter(item => {
        return item.Title.indexOf(video) > -1;
      });
      this.setState({
        filtered
      });
    } else {
      this.setState({
        filtered: ""
      });
    } */
  };

  /*  getMovie = e => {
    //e.preventDefault();
    const API_KEY = "7c4a7eaa";
    axios.get(`http://www.omdbapi.com/?t=${this.state.movies}&apikey=${API_KEY}`).then(res => {
      console.log(res.data);
      this.setState({ movies: res.data });
    });
  }; */

  render() {
    console.log("aqui van las movies", this.state.movies);
    return (
      <div>
        <Header keywords={this.getkeywords} />

        {this.state.Director}
      </div>
    );
  }
}

export default App;
