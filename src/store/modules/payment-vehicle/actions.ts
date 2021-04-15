import { action } from 'typesafe-actions';
import * as types from './types';

export function paymentVehicleRequest ({
  plate
}: {
  plate: string;
}) {
  console.log('action request')
  return action(types.PAYMENT_VEHICLE_REQUEST, {
    plate
  });
}

export function paymentVehicleSuccess () {
  console.log('oi')
  return action(types.PAYMENT_VEHICLE_SUCCESS);
}

export function paymentVehicleFailure () {
  console.log('ish')
  return action(types.PAYMENT_VEHICLE_FAILURE);
}
