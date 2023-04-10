import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { PageRoutes } from '@/constants/common-constants';
import { useAppSelector } from '@/stores/hooks';

const PrivateLayout = (props: PropsWithChildren) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.authStore.user);

  if (!user) {
    router.push(PageRoutes.SIGN_IN);
    return null;
  }

  return <>{props.children}</>;
};

export default PrivateLayout;
