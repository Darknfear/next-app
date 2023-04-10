import React from 'react';
import { Button, ButtonProps } from 'antd';

const Link = (props: ButtonProps) => {
  const { className = '', children, ...passProps } = props;

  return (
    <Button className={`${className} px-1`} type="link" {...passProps}>
      {children}
    </Button>
  );
};

export default Link;
