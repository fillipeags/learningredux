import { all } from "redux-saga/effects";

import cart from './cart/sagas'

export default function* rootSaga() {
  yield all([
    cart,
  ])
}