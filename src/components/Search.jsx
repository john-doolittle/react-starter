import React from 'react';
import App from './App.js';

var Search = (props) => {

  const handleClick = (event) => {
    props.handleSearchSubmit();
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleSearchInput(event.target.value);
  };

  return (
    <div className="searchBar">
      <input className="form-control" placeholder="Search..." value={props.searchInputValue} type="text" onChange={handleChange}/>
      <button className="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );

};

export default Search;
