import React from 'react';

var Search = (props) => {

  const handleClick = (event) => {
    props.handleSearchQuery(event.target.value);
  };

  const handleChange = (event) => {
    doStuff;
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
