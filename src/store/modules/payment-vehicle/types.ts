import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type paymentVehicleAction = ActionType<typeof actions>;

export interface IVehicleForm {
  isLoading: boolean;
  error: boolean;
}


export const PAYMENT_VEHICLE_REQUEST = '@auth/PAYMENT_VEHICLE_REQUEST';
export const PAYMENT_VEHICLE_SUCCESS = '@auth/PAYMENT_VEHICLE_SUCCESS';
export const PAYMENT_VEHICLE_FAILURE = '@auth/PAYMENT_VEHICLE_FAILURE';

