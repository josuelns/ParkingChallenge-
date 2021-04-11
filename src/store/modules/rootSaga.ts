import { all } from 'redux-saga/effects';

import entraceNewVehicle from './entrace-new-vehicle/sagas';

export default function* rootSaga () {
  return yield all([
    entraceNewVehicle
  ])
}
