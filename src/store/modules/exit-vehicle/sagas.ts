import { takeLatest, call, put, all } from 'redux-saga/effects';
import { get } from 'lodash';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as types from './types';
import axios from '../../../services/axios';
import Cookies from 'js-cookie';


export function* outVehicle ({ payload }: ActionType<typeof actions.exitVehicleRequest>) {
  try {
    const response = yield call(axios.post, `/parking/${payload}/out`)

    yield put(actions.exitVehicleSuccess())
    
    console.log('@exitVehicle/payload:: ', payload)
  } catch (err) {
    const error = get(err, 'response.data.error', [])
    const statusCode = get(err, 'response.data.statusCode', 0)
    const messages = get(err, 'response.data.message', [])
    console.log(`Erro[${statusCode}]:: ${error} -`, messages)

    yield put(actions.exitVehicleFailure())
  }
}

export default all([
  takeLatest(types.EXIT_VEHICLE_REQUEST, outVehicle),
])
