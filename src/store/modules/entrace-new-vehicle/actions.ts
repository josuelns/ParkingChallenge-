import { action } from 'typesafe-actions';
import * as types from './types';

export function entraceNewVehicleRequest ({
  plaque,
  prevPath,
  history,
}: {
  plaque: string;
  prevPath?: string;
  history: Array<string>;
}) {
  return action(types.REGISTER_NEW_VEHICLE_REQUEST, {
    plaque,
    prevPath,
    history,
  });
}

export function entraceNewVehicleSuccess ({
  prevPath,
  history,
}: {
  prevPath?: string;
  history: Array<string>;
}) {
  return action(types.REGISTER_NEW_VEHICLE_SUCCESS, {
    prevPath,
    history
  });
}

export function entraceNewVehicleFailure () {
  return action(types.REGISTER_NEW_VEHICLE_FAILURE);
}
