import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return [...state, Object.assign({}, action.movie)];
    default:
      return state;
  }
};

