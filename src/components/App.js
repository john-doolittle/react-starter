import React from 'react';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import sampleMovieData from './sampleMovieData.js';
import MovieList from './MovieList.jsx';
import '../main.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfMovies: [],
      searchInputValue: '',
      movieInputValue: ''
    };
  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.handleAddMovieInput = this.handleAddMovieInput.bind(this);
  this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
  }

  handleSearchInput(value) {
    this.setState({
      searchInputValue: value
    }, () => console.log('hello from the state: ', this.state.searchInputValue));
  }

  handleSearchSubmit() {
    let filteredMovies = this.state.listOfMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInputValue.toLowerCase()));
    if (filteredMovies.length === 0) {
      alert("Oops! No matching results!");
    } else {
      this.setState({
        listOfMovies: filteredMovies
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
    let moviesArr = this.state.listOfMovies.concat(newMovie);
    this.setState({
      listOfMovies: moviesArr
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
      <MovieList
      movies={this.state.listOfMovies}/>
    </div>
  )}
}

export default App;
