import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, wrapper } from '@/stores';
import { RestrictedPaths } from '@/constants/common-constants';
import '@/styles/style.scss';
import { PublicLayout } from '@/layouts';

function App({ Component, ...passProps }: AppProps) {
  const router = useRouter();
  const { store, props } = wrapper.useWrappedStore(passProps);
  const { pageProps } = props;

  // const isPrivatePath = PrivatePaths.includes(router.pathname);
  const isRestrictedPath = RestrictedPaths.includes(router.pathname);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* {isPrivatePath ? (
          <PrivateLayout>
            <MenuLayout>
              <Component {...pageProps} />
            </MenuLayout>
          </PrivateLayout>
        ) : (
          <PublicLayout isRestricted={isRestrictedPath}>
            <Component {...pageProps} />
          </PublicLayout>
        )} */}

        <PublicLayout isRestricted={isRestrictedPath}>
          <Component {...pageProps} />
        </PublicLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
