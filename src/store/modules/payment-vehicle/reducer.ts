import { IVehicleForm, paymentVehicleAction } from './types';
import axios from '../../../services/axios';
import * as types from './types';

const initialState: IVehicleForm = {
  isLoading: false,
  error: false,
};

export default function paymentVehicle (
  state = initialState,
  action: paymentVehicleAction
): IVehicleForm {
  switch (action.type) {
    case types.PAYMENT_VEHICLE_REQUEST:
      console.log('reducer request')  
    return {
        ...state,
        isLoading: true,
      };
    case types.PAYMENT_VEHICLE_SUCCESS:
      console.log('reducer passou')
      return {
        ...state,
        isLoading: false
      };
    case types.PAYMENT_VEHICLE_FAILURE:
      delete axios.defaults.headers.Authorization;
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
}
