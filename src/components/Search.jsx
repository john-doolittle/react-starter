import React from 'react';

var Search = (props) => {

  const handleClick = (event) => {
    dostuff;
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleSearchInput(event.target.value);
  };

  return (
    <div className="searchBar">
      <input className="form-control" value={props.searchInputValue} onChange={handleChange}/>
      <button className="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );

};

export default Search;
