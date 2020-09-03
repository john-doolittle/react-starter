import React from 'react';

let MovieListItem = ({movie}) => (
      <div className='movieListItem'>
          <span className="movieContainer">
            {movie.title}
          </span>
          <span className="buttonContainer">
            <button className="button">
            Watched
            </button>
          </span>
      </div>
);

export default MovieListItem;