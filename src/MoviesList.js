import React from 'react';
import Movie from './Movie';
import './MoviesList.css';

const MoviesList = ({ movies, likeMovie, unlikeMovie }) => {
  return (
    <div className="MoviesList">
      {movies.map((movie, idx) =>
        <Movie key={idx}
          name={movie.name}
          liked={movie.liked}
          likeMovie={likeMovie.bind(null, parseInt(movie.id))}
          unlikeMovie={unlikeMovie.bind(null, parseInt(movie.id))} />
      )}
    </div>
  );
}

export default MoviesList;

