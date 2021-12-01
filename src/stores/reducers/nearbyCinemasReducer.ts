import * as actionTypes from '../actionTypes';

const initialState = {
  nearbyCinemasResult: null,
  isLoading: false,
  isErrorInLoadingApi: false,
  errorMessage: '',
};

const nearbyCinemasReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_NEARBY_CINEMAS_START:
      return {
        ...state,
        nearbyCinemasResult: null,
        isLoading: false,
        isErrorInLoadingApi: false,
        errorMessage: '',
      };
    case actionTypes.FETCH_NEARBY_CINEMAS_SUCCESS:
      return {
        ...state,
        nearbyCinemasResult: action.data,
        isLoading: false,
        isErrorInLoadingApi: false,
        errorMessage: '',
      };
    case actionTypes.FETCH_NEARBY_CINEMAS_ERROR:
      return {
        ...state,
        nearbyCinemasResult: action.data,
        isLoading: false,
        isErrorInLoadingApi: false,
        errorMessage: '',
      };
  }
  return state;
};

export default nearbyCinemasReducer;
