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
      movieInputValue: '',
      searchInputValue: ''
    };
  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.handleAddMovieInput = this.handleAddMovieInput.bind(this);
  }

  handleSearchInput(value) {
    // console.log(value);
    this.setState({
      searchInputValue: value
    }, () => console.log('hello from the state: ', this.state.searchInputValue));
  }

  handleSearchSubmit() {
    let filteredMovies = this.state.listOfMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInputValue.toLowerCase()));
    if (filteredMovies.length === 0) {
      this.setState({
        listOfMovies: [{title: 'No movies by that title'}]
      })
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

  render() {
    return(
    <div>
      <div className="logo"><h1>Movie List!</h1></div>
      <AddMovie handleAddMovieInput={this.handleAddMovieInput} movieInputValue={this.state.movieInputValue}/>
      <Search handleSearchInput={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} searchInputValue={this.state.searchInputValue}/>
      <MovieList movies={this.state.listOfMovies}/>
    </div>
  )}
}

export default App;
