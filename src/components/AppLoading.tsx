import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { useAppSelector } from '@/stores/hooks';

const AppLoading = () => {
  const isAppLoading = useAppSelector((state) => state.appLoadingStore.isAppLoading);

  if (!isAppLoading) return null;

  return (
    <Spin
      className="bg-black opacity-40 fixed inset-0 z-50 flex items-center justify-center"
      indicator={<LoadingOutlined className="text-7xl" spin />}
    />
  );
};

export default AppLoading;
