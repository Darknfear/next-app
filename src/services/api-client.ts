/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { HttpStatusCodes } from '@/constants/common-constants';
import { store } from '@/stores';
import { clearAuthStoreAction, setAuthStoreAction } from '@/stores/slices/auth-slice';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const requestHandler = (config: AxiosRequestConfig) => {
  const accessToken = store.getState().authStore.accessToken;
  config.headers = {
    Authorization: `Bearer ${accessToken}`,
    ...config.headers,
  };
  config.params = {
    ...config.params,
    version: Date.now(),
  };
  return config;
};

const responseErrorHandler = async (err: AxiosError) => {
  const originalRequest: any = err.config;

  if (err?.response?.status === HttpStatusCodes.UNAUTHORIZED && !originalRequest._retry) {
    try {
      originalRequest._retry = true;
      const refreshToken = store.getState().authStore.refreshToken;

      const { data }: AxiosResponse<any> = await axios({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        url: '/auth/refresh-token',
        data: { refreshToken },
      });

      store.dispatch(setAuthStoreAction(data));
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      return axiosInstance(originalRequest);
    } catch (e: any) {
      store.dispatch(clearAuthStoreAction());
      return Promise.reject(e?.response?.data ? e?.response?.data : e);
    }
  }

  return Promise.reject(err);
};

axiosInstance.interceptors.request.use(requestHandler as any, (err) => Promise.reject(err));
axiosInstance.interceptors.response.use((response: any) => response, responseErrorHandler);

export { axiosInstance as ApiClient };
