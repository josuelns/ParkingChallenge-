import { action } from 'typesafe-actions';
import * as types from './types';

export function entraceNewVehicleRequest ({
  plate
}: {
  plate: string;
}) {
  console.log('request')
  return action(types.REGISTER_NEW_VEHICLE_REQUEST, {
    plate
  });
}

export function entraceNewVehicleSuccess () {
  console.log('oi')
  return action(types.REGISTER_NEW_VEHICLE_SUCCESS);
}

export function entraceNewVehicleFailure () {
  console.log('ish')
  return action(types.REGISTER_NEW_VEHICLE_FAILURE);
}
