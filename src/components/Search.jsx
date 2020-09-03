import React from 'react';

var Search = (props) => {
  // const handleChange = (event) => {
  //   props.queryChange(event.target.value);
  // };
  return (
    <div className="searchBar">
      <input className="form-control"/>
      <button className="button">Search</button>
    </div>
  );

};

export default Search;
