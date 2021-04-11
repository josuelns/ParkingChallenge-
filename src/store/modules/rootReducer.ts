import { combineReducers } from 'redux';

import { StoreState } from '../createStore';
import entraceNewVehicle from './entrace-new-vehicle/reducer';

export default combineReducers<StoreState>({
  entraceNewVehicle
});
