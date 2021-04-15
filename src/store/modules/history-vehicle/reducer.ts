import { IVehicleForm, historyVehicleAction } from './types';
import axios from '../../../services/axios';
import * as types from './types';

const initialState: IVehicleForm = {
  isLoading: false,
  error: false,
};

export default function historyVehicle (
  state = initialState,
  action: historyVehicleAction
): IVehicleForm {
  switch (action.type) {
    case types.HISTORY_VEHICLE_REQUEST:
      console.log('reducer request')  
    return {
        ...state,
        isLoading: true,
      };
    case types.HISTORY_VEHICLE_SUCCESS:
      console.log('reducer passou')
      return {
        ...state,
        isLoading: false
      };
    case types.HISTORY_VEHICLE_FAILURE:
      delete axios.defaults.headers.Authorization;
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
}
