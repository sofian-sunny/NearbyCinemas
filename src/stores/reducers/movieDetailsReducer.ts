import * as actionTypes from '../actionTypes';

const initialState = {
  movieDetailsResult: null,
  isLoading: false,
  isErrorInLoadingApi: false,
  errorMessage: '',
};

const movieDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_DETAILS_START:
      return {
        ...state,
        movieDetailsResult: null,
        isLoading: true,
        isErrorInLoadingApi: false,
        errorMessage: '',
      };
    case actionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetailsResult: action.data,
        isLoading: false,
        isErrorInLoadingApi: false,
        errorMessage: '',
      };
    case actionTypes.FETCH_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movieDetailsResult: action.data,
        isLoading: false,
        isErrorInLoadingApi: true,
        errorMessage: '',
      };
  }
  return state;
};

export default movieDetailsReducer;
