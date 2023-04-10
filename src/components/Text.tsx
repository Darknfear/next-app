import React from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

const Text = (props: TextProps) => {
  const { children } = props;

  return <Typography.Text>{children}</Typography.Text>;
};

export default Text;
