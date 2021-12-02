import * as actionTypes from '../actionTypes';

const initialState = {
  cinemaMoviesResult: null,
  isLoading: false,
  isErrorInLoadingApi: false,
  errorMessage: '',
};

const cinemaMoviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_CINEMA_MOVIES_START:
      return {
        ...state,
        cinemaMoviesResult: null,
        isLoading: true,
        isErrorInLoadingApi: false,
        errorMessage: '',
      };
    case actionTypes.FETCH_CINEMA_MOVIES_SUCCESS:
      return {
        ...state,
        cinemaMoviesResult: action.data,
        isLoading: false,
        isErrorInLoadingApi: false,
        errorMessage: '',
      };
    case actionTypes.FETCH_CINEMA_MOVIES_ERROR:
      return {
        ...state,
        cinemaMoviesResult: action.data,
        isLoading: false,
        isErrorInLoadingApi: true,
        errorMessage: '',
      };
  }
  return state;
};

export default cinemaMoviesReducer;
