import { takeLatest, call, put, all } from 'redux-saga/effects';
import { get } from 'lodash';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as types from './types';
import axios, { axiosConfig} from '../../../services/axios';
import Cookies from 'js-cookie';


export function* historyVehicle ({ payload }: ActionType<typeof actions.historyVehicleRequest>) {
  try {
    const response = yield call(axios.get, `/parking/${payload}`)

    yield put(actions.historyVehicleSuccess())
    
    console.log('@historyVehicle/payload:: ', payload)
  } catch (err) {
    const error = get(err, 'response.data.error', [])
    const statusCode = get(err, 'response.data.statusCode', 0)
    const messages = get(err, 'response.data.message', [])
    console.log(`Erro[${statusCode}]:: ${error} -`, messages)

    yield put(actions.historyVehicleFailure())
  }
}

export default all([
  takeLatest(types.HISTORY_VEHICLE_REQUEST, historyVehicle),
])
