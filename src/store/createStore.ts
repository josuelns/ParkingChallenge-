import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import persistedReducers from './modules/reduxPersist';

import { entraceNewVehicleAction, IVehicleForm } from './modules/entrace-new-vehicle/types';

export interface StoreState {
  entraceNewVehicle: IVehicleForm;
}

export type StoreAction = entraceNewVehicleAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(persistedReducers(reducers), enhancer);
};
