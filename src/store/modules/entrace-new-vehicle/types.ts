import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type entraceNewVehicleAction = ActionType<typeof actions>;

export interface IVehicleForm {
  isLoading: boolean;
  error: boolean;
}


export const REGISTER_NEW_VEHICLE_REQUEST = '@auth/REGISTER_NEW_VEHICLE_REQUEST';
export const REGISTER_NEW_VEHICLE_SUCCESS = '@auth/REGISTER_NEW_VEHICLE_SUCCESS';
export const REGISTER_NEW_VEHICLE_FAILURE = '@auth/REGISTER_NEW_VEHICLE_FAILURE';

