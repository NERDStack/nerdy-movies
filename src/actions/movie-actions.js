import * as types from './action-types';

export const addMovie = (movie) => {
  return {
    type: types.ADD_MOVIE,
    movie
  };
}

export const likeMovie = (movieId) => {
  return {
    type: types.LIKE_MOVIE,
    movieId
  };
};

export const unlikeMovie = (movieId) => {
  return {
    type: types.UNLIKE_MOVIE,
    movieId
  };
};

