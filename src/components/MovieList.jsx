import React from 'react';
import MovieListItem from './MovieListItem.jsx'

let MovieList = (props) => (
  <div className='movieList'>
    {props.movies.map((movie, i) =>
      <MovieListItem movie={movie} key={i} />
    )}
  </div>
);

export default MovieList;