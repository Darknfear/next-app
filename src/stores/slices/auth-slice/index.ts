import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TUser } from '@/types/auth-types';
import {
  postLoginUserBySocialNWAction,
  postSignInUserAction,
  postSignUpUser,
} from './async-actions';
import { TSignInActionPayload } from './action-types';

interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
  user?: TUser;
}

const initialState: IAuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStoreAction: (state, action: PayloadAction<TSignInActionPayload>) => ({
      ...state,
      ...action.payload,
    }),
    clearAuthStoreAction: () => initialState,
  },
});

const authReducer = authSlice.reducer;
const { setAuthStoreAction, clearAuthStoreAction } = authSlice.actions;

export {
  authReducer,
  setAuthStoreAction,
  clearAuthStoreAction,
  postSignUpUser,
  postSignInUserAction,
  postLoginUserBySocialNWAction,
};
