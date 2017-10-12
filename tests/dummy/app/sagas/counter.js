import { next } from '@ember/runloop';
import { effects, takeEvery } from 'redux-saga';

const { call, put } = effects;

const delay = ms => next(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
  yield call(delay, 0);
  yield put({type: 'UP'});
}

export default function* addAsync() {
  yield takeEvery('ADD', incrementAsync);
}
