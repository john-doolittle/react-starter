import React from 'react';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ListToggle from './ListToggle.jsx';
import sampleMovieData from './sampleMovieData.js';
import MovieList from './MovieList.jsx';
import '../main.css';

let movieStorage = [];

class App extends React.Component {

  constructor(props) {
    super(props);
    let filtered = movieStorage.filter(movie => !movie.watched)
    this.state = {
      displayedMovies: filtered,
      searchInputValue: '',
      movieInputValue: '',
      showWatched: false
    };
  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.handleAddMovieInput = this.handleAddMovieInput.bind(this);
  this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
  this.handleWatchedToggle = this.handleWatchedToggle.bind(this);
  this.handleMovieItemToggle = this.handleMovieItemToggle.bind(this);
  }

  handleSearchInput(value) {
    this.setState({
      searchInputValue: value
    });
  }

  handleSearchSubmit() {
    let filteredMovies = this.state.displayedMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInputValue.toLowerCase()));
    if (filteredMovies.length === 0) {
      this.setState({
        searchInputValue: ''
      }, alert("Oops! No matching results!"));
    } else {
      this.setState({
        displayedMovies: filteredMovies,
        searchInputValue: ''
      });
    }
  }

  handleAddMovieInput(value) {
    this.setState({
      movieInputValue: value
    });
  }

  handleAddMovieSubmit() {
    let newMovie = {};
    newMovie.title = this.state.movieInputValue;
    newMovie.watched = this.state.showWatched;
    movieStorage.push(newMovie);
    let filtered = movieStorage.filter(movie => movie.watched === this.state.showWatched);
    this.setState({
      displayedMovies: filtered,
      movieInputValue: ''
    });
  }

  handleWatchedToggle() {
    let bool = !(this.state.showWatched);
    let filtered = movieStorage.filter(movie => movie.watched === bool);
    this.setState({
      displayedMovies: filtered,
      showWatched: bool
    });
  }

  handleMovieItemToggle(movieId) {
    let movieItem = movieStorage.filter(movie => movie.title === movieId);
    movieItem[0].watched = !(movieItem.watched);
    let filtered = movieStorage.filter(movie => movie.watched === this.state.showWatched)
    this.setState({
      displayedMovies: filtered,
    });
  }

  render() {
    return(
    <div>
      <div className="logo"><h1>Movie List!</h1></div>
      <AddMovie
      handleAddMovieInput={this.handleAddMovieInput}
      handleAddMovieSubmit={this.handleAddMovieSubmit}
      movieInputValue={this.state.movieInputValue}/>
      <Search
      handleSearchInput={this.handleSearchInput}
      handleSearchSubmit={this.handleSearchSubmit}
      searchInputValue={this.state.searchInputValue}/>
      <ListToggle
      handleWatchedToggle={this.handleWatchedToggle}
      state={this.state}/>
      <MovieList
      movies={this.state.displayedMovies}
      handleMovieItemToggle={this.handleMovieItemToggle}/>
    </div>
  )}
}

export default App;
