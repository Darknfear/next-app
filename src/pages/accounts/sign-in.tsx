import React, { useState } from 'react';
import { Card, Divider, Form, Image } from 'antd';
import { useRouter } from 'next/router';

import { AccountForm, AccountSocialSection } from '@/containers';
import { LinkButton, Text } from '@/components';
import { PageRoutes } from '@/constants/common-constants';
import { TSignIn } from '@/types/auth-types';
import { useAppDispatch } from '@/stores/hooks';
import { postSignInUserAction } from '@/stores/slices/auth-slice';

const SignIn = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoToSignInMode = () => {
    router.push(PageRoutes.SIGN_UP);
  };

  const handleLoginUser = async (values: TSignIn) => {
    setIsLoading(true);
    const { payload: isSignInSuccess } = await dispatch(postSignInUserAction(values));
    if (isSignInSuccess) router.push(PageRoutes.MAIN);
    setIsLoading(false);
  };

  return (
    <Card className="w-96 ">
      <Image
        rootClassName="w-full flex items-center justify-center mb-4"
        className="w-8/12"
        preview={false}
        src={'/images/logo.png'}
        alt="logo-pga"
      />
      <AccountForm isLoading={isLoading} onFinish={handleLoginUser} form={form} />
      <Divider className="my-0">Hoặc</Divider>
      <AccountSocialSection />
      <div className="flex items-center justify-center">
        <Text>
          You don&apos;t have an account?{' '}
          <LinkButton onClick={handleGoToSignInMode}>Sign up here</LinkButton>
        </Text>
      </div>
    </Card>
  );
};

export default SignIn;
