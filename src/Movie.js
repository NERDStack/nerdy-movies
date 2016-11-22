import React from 'react';
import './Movie.css';

const Movie = (props) => {
  return (
    <div className="Movie">
      <div>
        {props.name}
      </div>
      <div>
        {props.description}
      </div>
      <div>
        {props.voteCount}
      </div>
    </div>
  );
};

export default Movie;

