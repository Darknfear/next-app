import React, { useEffect, useMemo, useState } from 'react';
import { DoubleLeftOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu as MenuNavBar, MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/es/menu/hooks/useItems';

import { checkShowNavBar, getRoute } from '@/utils/common-utils';
import { Footer } from '@/components';
import { PageRoutes } from '@/constants/common-constants';
import { useTranslate } from '@/hooks/useTranslate';
import { useAppDispatch } from '@/stores/hooks';
import { clearAuthStoreAction } from '@/stores/slices/auth-slice';

const { Header, Sider, Content } = Layout;

interface IProps {
  children: React.ReactNode;
}

const MenuLayout = ({ children }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const showMenu = checkShowNavBar(selectedKeys[0]);

  const translate = useTranslate();

  const IConOutlined = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;

  const handleNavigation: MenuProps['onClick'] = (e) => {
    router.push(e.key);
  };

  const handleHideNavBar = () => setCollapsed(!collapsed);

  const handleSignOut = () => {
    dispatch(clearAuthStoreAction());
  };

  useEffect(() => {
    setSelectedKeys([getRoute(router.route)]);
  }, [router.route]);

  const NavBarList: ItemType[] = useMemo(() => {
    return [
      {
        key: PageRoutes.MAIN,
        label: translate.navBarList.main,
        icon: <PieChartOutlined />,
      },
      {
        key: PageRoutes.PRODUCTS,
        label: translate.navBarList.products,
        icon: <UserOutlined />,
      },
    ];
  }, [translate]);

  const MenuItem = useMemo(() => {
    if (collapsed) return null;

    return (
      <div onClick={handleSignOut}>
        <DoubleLeftOutlined /> {translate.navBarList.signOut}
      </div>
    );
  }, [translate, collapsed]);

  return showMenu ? (
    <Layout className="min-h-screen">
      <Sider trigger={MenuItem} collapsible collapsed={collapsed}>
        <MenuNavBar
          className="logo"
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={handleNavigation}
          items={NavBarList}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="p-2.5 h-auto bg-white" style={{ lineHeight: 0 }}>
          <IConOutlined className="trigger" onClick={handleHideNavBar} />
        </Header>
        <Content className="mx-10 my-12 min-h-50">{children}</Content>
        <Footer>PowerGate Australia @2023</Footer>
      </Layout>
    </Layout>
  ) : (
    <>{children}</>
  );
};

export default MenuLayout;
