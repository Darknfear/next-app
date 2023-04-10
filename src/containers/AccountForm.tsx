import { Form, FormInstance } from 'antd';
import React from 'react';

import { EAccountFormMode } from '@/types/account-types';
import { FormItem, Input, Button } from '@/components';
import { TSignUp } from '@/types/auth-types';

interface IAccountFormProps {
  mode?: EAccountFormMode;
  form: FormInstance<TSignUp>;
  onFinish: (values: TSignUp) => Promise<void>;
  isLoading?: boolean;
}

const AccountForm = (props: IAccountFormProps) => {
  const { mode = EAccountFormMode.SIGN_IN, form, isLoading, onFinish } = props;
  const isSignUpForm = mode === EAccountFormMode.SIGN_UP;

  return (
    <Form name="account" form={form} onFinish={onFinish}>
      <FormItem name="email" rules={[{ required: true, message: 'Please input email!' }]}>
        <Input placeholder="Email" />
      </FormItem>
      <FormItem name="password" rules={[{ required: true, message: 'Please input password!' }]}>
        <Input placeholder="Password" type="password" />
      </FormItem>
      {isSignUpForm && (
        <FormItem
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm password!' }]}
        >
          <Input placeholder="Confirm Password" type="password" />
        </FormItem>
      )}
      <FormItem className="flex items-center justify-center" shouldUpdate>
        <Button loading={isLoading} type="primary" htmlType="submit">
          {isSignUpForm ? 'Sign Up' : 'Sign In'}
        </Button>
      </FormItem>
    </Form>
  );
};

export default AccountForm;
