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
      searchInputValue: ''
    };
  this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(event) {
    this.setState({
      searchInputValue: event.target.value
    }, console.log('hello from the state:', this.state));
  }

  render() {
    return(
    <div>
      <div className="logo"><h1>Movie List!</h1></div>
      <Search handleSearchInput={this.handleSearchInput} searchInputValue={this.state.searchInputValue}/>
      <MovieList movies={this.state.listOfMovies}/>
    </div>
  )}
}

export default App;
