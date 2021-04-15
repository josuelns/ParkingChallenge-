import { action } from 'typesafe-actions';
import * as types from './types';

export function exitVehicleRequest ({
  plate
}: {
  plate: string;
}) {
  console.log('request')
  return action(types.EXIT_VEHICLE_REQUEST, {
    plate
  });
}

export function exitVehicleSuccess () {
  console.log('oi')
  return action(types.EXIT_VEHICLE_SUCCESS);
}

export function exitVehicleFailure () {
  console.log('ish')
  return action(types.EXIT_VEHICLE_FAILURE);
}
