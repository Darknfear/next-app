/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import { EAuthProvider, TSignIn, TSignUp, TUser } from '@/types/auth-types';
import { firebaseAuth } from '@/config/firebase-config';

export const doSignUpWithEmailPassword = async ({ email, password }: TSignUp) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const doSignInWithEmailPassword = async ({ email, password }: TSignIn) => {
  const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
  const idToken = await user.getIdToken();
  return {
    user: user as TUser,
    accessToken: idToken,
    refreshToken: '',
  };
};

export const doLoginWithFaceBookGoogle = async ({ type }: { type: EAuthProvider }) => {
  const provider =
    type === EAuthProvider.FACEBOOK ? new FacebookAuthProvider() : new GoogleAuthProvider();
  const { user } = await signInWithPopup(firebaseAuth, provider);
  const idToken = await user.getIdToken();
  return {
    user: user as TUser,
    accessToken: idToken,
    refreshToken: '',
  };
};
