import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type historyVehicleAction = ActionType<typeof actions>;

export interface IVehicleForm {
  isLoading: boolean;
  error: boolean;
}


export const HISTORY_VEHICLE_REQUEST = '@auth/HISTORY_VEHICLE_REQUEST';
export const HISTORY_VEHICLE_SUCCESS = '@auth/HISTORY_VEHICLE_SUCCESS';
export const HISTORY_VEHICLE_FAILURE = '@auth/HISTORY_VEHICLE_FAILURE';

