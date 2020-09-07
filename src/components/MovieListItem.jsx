import React from 'react';

let MovieListItem = (props) => {

  const handleToggle = (event) => {
    props.handleMovieItemToggle();
    event.preventDefault();
  };
      return (<div className='movieListItem'>
          <span className="movieContainer">
            {props.movie.title}
          </span>
          <span className="buttonContainer">
            <button className="button" onClick={handleToggle}>
            Watched
            </button>
          </span>
      </div>
      );
};

export default MovieListItem;