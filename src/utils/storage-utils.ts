import { TAuthToken, EAuthToken } from '@/types/auth-types';
import { checkClientSide } from './common-utils';

const isClient = checkClientSide();

const getItem = (key: string) => {
  return isClient && localStorage.getItem(key);
};

const setItem = (key: string, value: string) => {
  isClient && localStorage.setItem(key, value);
};

const removeItem = (key: string) => {
  isClient && localStorage.removeItem(key);
};

const clear = () => {
  isClient && localStorage.clear();
};

const setStorageToken = (tokens: TAuthToken) => {
  setItem(EAuthToken.ACCESS_TOKEN, tokens.accessToken);
  setItem(EAuthToken.REFRESH_TOKEN, tokens.refreshToken);
};

export { clear, getItem, setItem, removeItem, setStorageToken };
