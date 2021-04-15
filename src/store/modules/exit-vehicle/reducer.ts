import { IVehicleForm, outVehicleAction } from './types';
import axios from '../../../services/axios';
import * as types from './types';

const initialState: IVehicleForm = {
  isLoading: false,
  error: false,
};

export default function exitVehicle (
  state = initialState,
  action: outVehicleAction
): IVehicleForm {
  switch (action.type) {
    case types.EXIT_VEHICLE_REQUEST:
      console.log('reducer request')  
    return {
        ...state,
        isLoading: true,
      };
    case types.EXIT_VEHICLE_SUCCESS:
      console.log('reducer passou')
      return {
        ...state,
        isLoading: false
      };
    case types.EXIT_VEHICLE_FAILURE:
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
}
