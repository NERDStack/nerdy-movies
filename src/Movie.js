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
      <div onClick={ props.likeMovie }>
        {props.voteCount}
        <i className="fa fa-camera-retro"></i>
      </div>
      <div onClick={ props.unlikeMovie }>
        <i className="fa fa-camera"></i>
      </div>
    </div>
  );
};

export default Movie;

