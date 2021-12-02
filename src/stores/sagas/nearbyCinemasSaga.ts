import {takeEvery, call, put} from 'redux-saga/effects';
import {
  FETCH_NEARBY_CINEMAS,
  FETCH_NEARBY_CINEMAS_START,
  FETCH_NEARBY_CINEMAS_SUCCESS,
  FETCH_NEARBY_CINEMAS_ERROR,
  FETCH_CINEMA_MOVIES,
  FETCH_CINEMA_MOVIES_START,
  FETCH_CINEMA_MOVIES_SUCCESS,
  FETCH_CINEMA_MOVIES_ERROR,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_START,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_ERROR,
  BOOK_SELECTED_MOVIE,
  ADD_SELECTED_MOVIE,
} from '../actionTypes';
import {fetchApiData} from '../../services';
import {NearbyCinemas, CinemaMovies, MovieDetails} from '../../type/type';

function* fetchNearByCinemasSaga(action: any) {
  const {payload} = action;
  yield put({type: FETCH_NEARBY_CINEMAS_START});
  try {
    const response: NearbyCinemas = yield call(fetchApiData, payload);
    yield put({type: FETCH_NEARBY_CINEMAS_SUCCESS, data: response});
  } catch (e) {
    yield put({type: FETCH_NEARBY_CINEMAS_ERROR});
  }
}

function* fetchMoviesByCinemaIdSaga(action: any) {
  const {payload} = action;
  yield put({type: FETCH_CINEMA_MOVIES_START});
  try {
    const response: CinemaMovies = yield call(fetchApiData, payload);
    yield put({type: FETCH_CINEMA_MOVIES_SUCCESS, data: response});
  } catch (e) {
    yield put({type: FETCH_CINEMA_MOVIES_ERROR});
  }
}

function* fetchMovieDetailsSaga(action: any) {
  const {payload} = action;
  yield put({type: FETCH_MOVIE_DETAILS_START});
  try {
    const response: MovieDetails = yield call(fetchApiData, payload);
    yield put({type: FETCH_MOVIE_DETAILS_SUCCESS, data: response});
  } catch (e) {
    yield put({type: FETCH_MOVIE_DETAILS_ERROR});
  }
}

function* bookSelectedMovieSaga(action: any) {
  const {payload} = action;
  yield put({type: ADD_SELECTED_MOVIE, data: payload});
}

function* nearbyCinemasSaga() {
  yield takeEvery(FETCH_NEARBY_CINEMAS, fetchNearByCinemasSaga);
  yield takeEvery(FETCH_CINEMA_MOVIES, fetchMoviesByCinemaIdSaga);
  yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetailsSaga);
  yield takeEvery(BOOK_SELECTED_MOVIE, bookSelectedMovieSaga);
}

export default nearbyCinemasSaga;
