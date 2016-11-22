import * as types from './action-types';

export const addMovie = (movie) => {
  return {
    type: types.ADD_MOVIE,
    movie
  };
}

