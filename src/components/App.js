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
      searchInputValue: '',
    };
  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInput(value) {
    // console.log(value);
    this.setState({
      searchInputValue: value
    }, () => console.log('hello from the state: ', this.state.searchInputValue));
  }

  handleSearchSubmit() {
    let filteredMovies = this.state.listOfMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInputValue));
    this.setState({
      listOfMovies: filteredMovies
    })
  }

  render() {
    return(
    <div>
      <div className="logo"><h1>Movie List!</h1></div>
      <Search handleSearchInput={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} searchInputValue={this.state.searchInputValue}/>
      <MovieList movies={this.state.listOfMovies}/>
    </div>
  )}
}

export default App;
