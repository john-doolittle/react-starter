import React from 'react';

var AddMovie = (props) => {

  const handleClick = (event) => {
    props.handleAddMovieSubmit();
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleAddMovieInput(event.target.value);
  };

  return (
    <div className="addMovieBar">
      <input className="form-control" placeholder="Add movie title here" value={props.searchInputValue} type="text" onChange={handleChange}/>
      <button className="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );

};

export default AddMovie;