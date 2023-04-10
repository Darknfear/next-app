import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  doSignUpWithEmailPassword,
  doLoginWithFaceBookGoogle,
  doSignInWithEmailPassword,
} from '@/services/auth-services';
import { EAuthProvider } from '@/types/auth-types';
import { setAuthStoreAction } from '.';
import { TSignInPayload, TSignUpPayload } from './action-types';
import { notification } from 'antd';

const postSignUpUserAction = createAsyncThunk(
  'auth/postSignUpUser',
  async (payload: TSignUpPayload) => {
    try {
      await doSignUpWithEmailPassword(payload);
      notification.success({
        message: 'Create account successfully',
      });
      return true;
    } catch (error) {
      console.log(error);
      notification.error({
        message: 'Create account failed',
      });
    }
  }
);

const postSignInUserAction = createAsyncThunk(
  'auth/postSignInUserAction',
  async (payload: TSignInPayload, { dispatch }) => {
    try {
      const response = await doSignInWithEmailPassword(payload);
      const { accessToken, refreshToken, user } = response;

      dispatch(setAuthStoreAction({ accessToken, refreshToken, user }));
      notification.success({
        message: 'Sign in successfully',
      });
      return true;
    } catch (error) {
      console.log(error);
      notification.error({
        message: 'Sign in failed',
      });
    }
  }
);

const postLoginUserBySocialNWAction = createAsyncThunk(
  'auth/postLoginUserBySocialNW',
  async (payload: EAuthProvider, { dispatch }) => {
    try {
      const response = await doLoginWithFaceBookGoogle({ type: payload });
      const { accessToken, refreshToken, user } = response;
      dispatch(setAuthStoreAction({ accessToken, refreshToken, user }));
    } catch (error) {
      console.log(error);
      notification.error({
        message: 'Create account failed',
      });
    }
  }
);

export {
  postSignUpUserAction as postSignUpUser,
  postSignInUserAction,
  postLoginUserBySocialNWAction,
};
