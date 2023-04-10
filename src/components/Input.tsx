import React from 'react';
import { Input as AntInput, InputProps } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Input = (props: InputProps) => {
  const { type, ...passProps } = props;

  if (type === 'password') {
    return (
      <AntInput.Password
        {...passProps}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    );
  }

  return <AntInput {...passProps} />;
};

export default Input;
