export enum EAuthProvider {
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
}

export enum EAuthToken {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

export type TAuthToken = {
  accessToken: string;
  refreshToken: string;
};

export type TSignIn = {
  email: string;
  password: string;
};

export type TSignUp = TSignIn & {
  confirmPassword?: string;
};

export type TUser = {
  displayName: string;
  email: string;
};
