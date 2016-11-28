import * as types from '../actions/action-types';

export default (state = [], action) => {
  const stateCopy = [...state];
  let i;
  switch (action.type) {
    case types.ADD_MOVIE:
      return [...state, Object.assign({}, action.movie)];
    case types.LIKE_MOVIE:
      for (i = 0; i < stateCopy.length; i++) {
        if (action.movieId === parseInt(stateCopy[i].id)) {
          stateCopy[i].liked = true;
          break;
        }
      }
      return stateCopy;
    case types.UNLIKE_MOVIE:
      for (i = 0; i < stateCopy.length; i++) {
        if (action.movieId === stateCopy[i].id) {
          stateCopy[i].liked = false;
        }
      }
      return stateCopy;
    default:
      return state;
  }
};

