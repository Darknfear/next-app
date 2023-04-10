import { TAuthToken, TSignIn, TSignUp, TUser } from '@/types/auth-types';

export type TSignInActionPayload = TAuthToken & {
  user: TUser;
};

export type TSignInPayload = TSignIn;

export type TSignUpPayload = TSignUp;
