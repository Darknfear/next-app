import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import Router from 'next/router';

import { Button, Text } from '@/components';
import { PageRoutes } from '@/constants/common-constants';
import { useAppDispatch } from '@/stores/hooks';
import { postLoginUserBySocialNWAction } from '@/stores/slices/auth-slice';
import { EAuthProvider } from '@/types/auth-types';

const AccountSocialSection = () => {
  const dispatch = useAppDispatch();

  const onLoginBySocialNW = async (type: EAuthProvider) => {
    await dispatch(postLoginUserBySocialNWAction(type));
    Router.push(PageRoutes.PRODUCTS);
  };

  return (
    <div className="flex items-center justify-center flex-col mt-3">
      <Button
        onClick={() => {
          onLoginBySocialNW(EAuthProvider.FACEBOOK);
        }}
        type="text"
        className="mb-2 flex items-center justify-center"
      >
        <FacebookOutlined />
        <Text>Login with Facebook</Text>
      </Button>
      <Button
        onClick={() => {
          onLoginBySocialNW(EAuthProvider.GOOGLE);
        }}
        type="text"
        className="flex items-center justify-center"
      >
        <GoogleOutlined />
        <Text>Login with Google</Text>
      </Button>
    </div>
  );
};

export default AccountSocialSection;
