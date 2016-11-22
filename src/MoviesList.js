import React from 'react';
import Movie from './Movie';

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, idx) =>
        <Movie key={idx} name={movie.name} />
      )}
    </div>
  );
}

export default MoviesList;

