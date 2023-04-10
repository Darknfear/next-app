import { Layout } from 'antd';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { Footer } from '@/components';
import { PageRoutes } from '@/constants/common-constants';
import { useAppSelector } from '@/stores/hooks';

const { Content } = Layout;

interface IPublicLayoutProps extends PropsWithChildren {
  isRestricted?: boolean;
}

const PublicLayout = ({ children, isRestricted }: IPublicLayoutProps) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.authStore.user);

  if (user && isRestricted) {
    router.push(PageRoutes.MAIN);
    return null;
  }

  return (
    <Layout className="min-h-screen">
      <Content className="flex flex-col items-center justify-center">{children}</Content>
      <Footer>PowerGate Australia @2023</Footer>
    </Layout>
  );
};

export default PublicLayout;
