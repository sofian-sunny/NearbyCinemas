import {fork} from 'redux-saga/effects';

import nearbyCinemasSaga from './nearbyCinemasSaga';
export default function* rootSaga() {
  yield fork(nearbyCinemasSaga);
}
