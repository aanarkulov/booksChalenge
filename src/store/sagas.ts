import { all, fork } from 'redux-saga/effects';

import bookSagas from './book/sagas';

const sagas = [bookSagas];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
