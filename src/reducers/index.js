import movies from './movies-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;

