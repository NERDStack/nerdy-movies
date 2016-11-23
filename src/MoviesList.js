import React from 'react';
import Movie from './Movie';
import './MoviesList.css';

const MoviesList = ({ movies }) => {
  return (
    <div className="MoviesList">
      {movies.map((movie, idx) =>
        <Movie key={idx}
          name={movie.name}
          description={`description ${movie.name}`} />
      )}
    </div>
  );
}

export default MoviesList;

