import { combineReducers } from '@reduxjs/toolkit';

import { productReducer } from './slices/product-slice';
import { authReducer } from './slices/auth-slice';
import { appLoadingReducer } from './slices/app-loading-slice';

export const rootReducer = combineReducers({
  productStore: productReducer,
  authStore: authReducer,
  appLoadingStore: appLoadingReducer,
});
