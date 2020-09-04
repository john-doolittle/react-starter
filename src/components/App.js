import React from 'react';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ListToggle from './ListToggle.jsx';
import sampleMovieData from './sampleMovieData.js';
import MovieList from './MovieList.jsx';
import '../main.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      watchedMovies: [],
      moviesToWatch: [],
      displayedMovies: [],
      searchInputValue: '',
      movieInputValue: '',
      showWatched: false
    };
  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.handleAddMovieInput = this.handleAddMovieInput.bind(this);
  this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
  }

  handleSearchInput(value) {
    this.setState({
      searchInputValue: value
    });
  }

  handleSearchSubmit() {
    let filteredMovies = this.state.displayedMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInputValue.toLowerCase()));
    if (filteredMovies.length === 0) {
      alert("Oops! No matching results!");
    } else {
      this.setState({
        displayedMovies: filteredMovies
      })
    }
  }

  handleAddMovieInput(value) {
    this.setState({
      movieInputValue: value
    });
  }

  handleAddMovieSubmit() {
    let newMovie = [{}];
    newMovie[0].title = this.state.movieInputValue;
    let moviesArr = this.state.displayedMovies.concat(newMovie);
    this.setState({
      displayedMovies: moviesArr
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
      <ListToggle state={this.state}/>
      <MovieList
      movies={this.state.displayedMovies}/>
    </div>
  )}
}

export default App;
