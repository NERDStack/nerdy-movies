import React from 'react';
import './Movies.css';
import Movie from './Movie';

const Movies = () => {
  const movies = 
    ['Movie One', 'Movie Two', 'Movie Three']
      .map((val, idx) =>
        <Movie 
          key={idx}
          name={val}
          description=`Movie description here ${val}` />);

  return (
    <div className="Movies">
      {movies}
    </div>
  );
};

export default Movies;

