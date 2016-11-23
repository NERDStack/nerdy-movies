import React from 'react';
import Movie from './Movie';
import './Movies.css';

const MoviesList = ({ movies }) => {
  return (
    <div className="Movies">
      {movies.map((movie, idx) =>
        <Movie key={idx}
          name={movie.name}
          description={`description ${movie.name}`} />
      )}
    </div>
  );
}

export default MoviesList;

