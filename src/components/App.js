import React from 'react';
import sampleMovieData from './sampleMovieData.js'
import MovieList from './MovieList.jsx'

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
      <div><h5>This is a test</h5></div>
      <MovieList movies={this.state.listOfMovies}/>
    </div>
  )}
}

export default App;
