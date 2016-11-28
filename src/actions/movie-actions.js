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

export const likeMovieAndPersist = (movieId) => {
  return (dispatch) => {
    const moviesUrl = `/api/movies/${movieId}/like`;
    fetch(moviesUrl, { method: 'POST' })
      .then(() => {
        dispatch(likeMovie(movieId));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const unlikeMovieAndPersist = (movieId) => {
  return (dispatch) => {
    const moviesUrl = `/api/movies/${movieId}/unlike`;
    fetch(moviesUrl, { method: 'POST' })
      .then(() => {
        dispatch(unlikeMovie(movieId));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

