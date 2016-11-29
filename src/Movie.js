import React from 'react';
import './Movie.css';

const Movie = (props) => {
  return (
    <div className="Movie">
      <div>
        {props.name}
      </div>
      <div>
        {props.liked ? "Love it!" : "Hate it"}
      </div>
      <div onClick={ props.likeMovie }>
        <i className="fa fa-camera-retro"></i>
      </div>
      <div onClick={ props.unlikeMovie }>
        <i className="fa fa-camera"></i>
      </div>
    </div>
  );
};

export default Movie;

