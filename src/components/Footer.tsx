import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

interface IFooterProps extends PropsWithChildren {
  className?: string;
}

const Footer = (props: IFooterProps) => {
  const { className, children } = props;

  return <AntFooter className={`text-center ${className}`}>{children}</AntFooter>;
};

export default Footer;
