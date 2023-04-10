/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore, Persistor } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { checkClientSide } from '@/utils/common-utils';
import { rootReducer } from './rootReducer';

const setupStore = () => {
  let reduxStore, persistorStore;

  if (!checkClientSide()) {
    reduxStore = configureStore({
      reducer: rootReducer,
    });
  } else {
    const persistConfig = {
      key: 'root',
      whitelist: ['authStore'],
      storage: createWebStorage('local'),
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    reduxStore = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }) as any,
    });
    persistorStore = persistStore(reduxStore);
  }

  return { reduxStore, persistorStore };
};

const { reduxStore, persistorStore } = setupStore();
export const store = reduxStore;
export const persistor = persistorStore as Persistor;

export type TAppState = ReturnType<typeof reduxStore.getState>;
export type TAppDispatch = typeof reduxStore.dispatch;

export const wrapper = createWrapper(() => reduxStore, { debug: false });
