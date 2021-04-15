import { action } from 'typesafe-actions';
import * as types from './types';

export function historyVehicleRequest ({
  plate
}: {
  plate: string;
}) {
  console.log('request')
  return action(types.HISTORY_VEHICLE_REQUEST, {
    plate
  });
}

export function historyVehicleSuccess () {
  console.log('oi')
  return action(types.HISTORY_VEHICLE_SUCCESS);
}

export function historyVehicleFailure () {
  console.log('ish')
  return action(types.HISTORY_VEHICLE_FAILURE);
}
