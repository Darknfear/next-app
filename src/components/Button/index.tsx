import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

const Button = (props: ButtonProps) => {
  const { className, children, ...passProps } = props;

  return (
    <AntButton className={className} {...passProps}>
      {children}
    </AntButton>
  );
};

export default Button;
