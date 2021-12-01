import {combineReducers} from 'redux';
import nearbyCinemasReducer from './nearbyCinemasReducer';
import cinemaMoviesReducer from './cinemaMoviesReducer';
import movieDetailsReducer from './movieDetailsReducer';

const rootReducer = combineReducers({
  nearbyCinemasReducer,
  cinemaMoviesReducer,
  movieDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
