import { IVehicleForm, entraceNewVehicleAction } from './types';
import axios from '../../../services/axios';
import * as types from './types';

const initialState: IVehicleForm = {
  isLoading: false,
  error: false,
};

export default function entraceNewVehicle (
  state = initialState,
  action: entraceNewVehicleAction
): IVehicleForm {
  switch (action.type) {
    case types.REGISTER_NEW_VEHICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_NEW_VEHICLE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.REGISTER_NEW_VEHICLE_FAILURE:
      delete axios.defaults.headers.Authorization;
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
}
