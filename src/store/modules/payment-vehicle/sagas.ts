import { takeLatest, call, put, all } from 'redux-saga/effects';
import { get } from 'lodash';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as types from './types';
import axios from '../../../services/axios';
import Cookies from 'js-cookie';


export function* paymentVehicle ({ payload }: ActionType<typeof actions.paymentVehicleRequest>) {
  try {
    //const response = yield call(axios.post, `/parking/${payload.plate}/pay`)

    yield put(actions.paymentVehicleSuccess())
    
    console.log('@paymentVehicle/payload:: ', payload)
  } catch (err) {
    const error = get(err, 'response.data.error', [])
    const statusCode = get(err, 'response.data.statusCode', 0)
    const messages = get(err, 'response.data.message', [])
    console.log(`Erro[${statusCode}]:: ${error} -`, messages)

    yield put(actions.paymentVehicleFailure())
  }
}

export default all([
  takeLatest(types.PAYMENT_VEHICLE_REQUEST, paymentVehicle),
])
