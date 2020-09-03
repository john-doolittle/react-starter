import React from 'react';
import Search from './Search.jsx';
import sampleMovieData from './sampleMovieData.js';
import MovieList from './MovieList.jsx';
import '../main.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfMovies: sampleMovieData,
    };
  }

  render() {
    return(
    <div>
      <div className="logo"><h1>Movie List!</h1></div>
      <Search />
      <MovieList movies={this.state.listOfMovies}/>
    </div>
  )}
}

export default App;
