import * as actionTypes from '../actionTypes';

export function fetchNearbyCinemasAction(payload: any) {
  return {
    type: actionTypes.FETCH_NEARBY_CINEMAS,
    payload,
  };
}

export function fetchCinemaMoviesAction(payload: any) {
  return {
    type: actionTypes.FETCH_CINEMA_MOVIES,
    payload,
  };
}

export function fetchMovieDetailsAction(payload: any) {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS,
    payload,
  };
}
