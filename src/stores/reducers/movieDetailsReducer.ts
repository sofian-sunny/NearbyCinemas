import * as actionTypes from '../actionTypes';

const initialState = {
  movieDetailsResult: null,
  isLoading: false,
  isErrorInLoadingApi: false,
  errorMessage: '',
  bookedMoviesList: [],
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
    case actionTypes.ADD_SELECTED_MOVIE:
      let existingTicket = state.bookedMoviesList;
      let index = existingTicket.findIndex(
        item => item.film_id === action.data.film_id,
      );
      if (existingTicket?.length && index > -1) {
        existingTicket[index] = {
          ...existingTicket[index],
          ticketCount: existingTicket[index].ticketCount + 1,
        };
        return {...state, bookedMoviesList: existingTicket};
      }
      return {
        ...state,
        bookedMoviesList: [...state.bookedMoviesList, action.data],
      };
  }
  return state;
};

export default movieDetailsReducer;
