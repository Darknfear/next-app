import { useRouter } from 'next/router';
import { Card, Divider, Form, Image } from 'antd';
import React, { useState } from 'react';

import { AccountForm, AccountSocialSection } from '@/containers';
import { EAccountFormMode } from '@/types/account-types';
import { LinkButton, Text } from '@/components';
import { PageRoutes } from '@/constants/common-constants';
import { useAppDispatch } from '@/stores/hooks';
import { postSignUpUser } from '@/stores/slices/auth-slice';
import { TSignUp } from '@/types/auth-types';

const SignUp = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoToSignInMode = () => {
    router.push(PageRoutes.SIGN_IN);
  };

  const handleSignUpUser = async (payload: TSignUp) => {
    setIsLoading(true);
    const { payload: isSignUpSuccess } = await dispatch(postSignUpUser(payload));
    if (isSignUpSuccess) router.push(PageRoutes.SIGN_IN);
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
      <AccountForm
        isLoading={isLoading}
        onFinish={handleSignUpUser}
        form={form}
        mode={EAccountFormMode.SIGN_UP}
      />
      <Divider className="my-0">Hoặc</Divider>
      <AccountSocialSection />
      <div className="flex items-center justify-center">
        <Text>
          You already have an account?{' '}
          <LinkButton onClick={handleGoToSignInMode}>Sign in here</LinkButton>
        </Text>
      </div>
    </Card>
  );
};

export default SignUp;
