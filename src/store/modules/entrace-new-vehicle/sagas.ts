import { takeLatest, call, put, all } from 'redux-saga/effects';
import { get } from 'lodash';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as types from './types';
import axios from '../../../services/axios';
import Cookies from 'js-cookie';

export function* registerNewVehicle ({ payload }: ActionType<typeof actions.entraceNewVehicleRequest>) {
  try {
    const response = yield call(axios.post, '/parking', payload);

    yield put(actions.entraceNewVehicleSuccess({ ...response.data }));

    payload.prevPath ? payload.history.push(payload.prevPath) : '';

    console.log('@entraceNewVehicle/payload:: ', payload)
  } catch (err) {
    const error = get(err, 'response.data.error', []);
    const statusCode = get(err, 'response.data.statusCode', 0);
    const messages = get(err, 'response.data.message', []);
    console.log(`Erro[${statusCode}]:: ${error} -`, messages);

    payload.history.push('*');
    yield put(actions.entraceNewVehicleFailure());
  }
}

export default all([
  takeLatest(types.REGISTER_NEW_VEHICLE_FAILURE, registerNewVehicle),
])