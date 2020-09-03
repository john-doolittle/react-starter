import React from 'react';
import App from './App.js';

var Search = (props) => {

  const handleClick = (event) => {
    dostuff;
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleSearchInput(event.target.value);
    console.log('hello', props.searchInputValue)
  };

  return (
    <div className="searchBar">
      <input className="form-control" value={props.searchInputValue} type="text" onChange={handleChange}/>
      <button className="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );

};

export default Search;
