import React from 'react';
import Movie from './Movie';
import './MoviesList.css';

const MoviesList = ({ movies, likeMovie, unlikeMovie }) => {
  return (
    <div className="MoviesList">
      {movies.map((movie, idx) =>
        <Movie key={idx}
          name={movie.name}
          description={`description ${movie.name}`}
          likeMovie={likeMovie.bind(null, idx)}
          unlikeMovie={unlikeMovie.bind(null, idx)} />
      )}
    </div>
  );
}

export default MoviesList;

