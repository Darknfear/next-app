import React from 'react';
import { Form, FormItemProps } from 'antd';

const FormItem = (props: FormItemProps) => {
  const { children, ...passProps } = props;

  return <Form.Item {...passProps}>{children}</Form.Item>;
};

export default FormItem;
