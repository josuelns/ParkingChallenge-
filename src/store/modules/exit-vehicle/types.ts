import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type outVehicleAction = ActionType<typeof actions>;

export interface IVehicleForm {
  isLoading: boolean;
  error: boolean;
}


export const EXIT_VEHICLE_REQUEST = '@auth/EXIT_VEHICLE_REQUEST';
export const EXIT_VEHICLE_SUCCESS = '@auth/EXIT_VEHICLE_SUCCESS';
export const EXIT_VEHICLE_FAILURE = '@auth/EXIT_VEHICLE_FAILURE';

