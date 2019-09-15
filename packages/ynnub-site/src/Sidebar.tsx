import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import Router from 'next/router';
import Link from '../components/Link';

export default () => {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    setPathname(Router.pathname);
  }, undefined);

  return (
    <Layout.Sider width={200} style={{ background: '#fff' }}>
      <nav>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={['text']}
        >
          <Menu.Item key="/">
            <Link href="/">
              <code>ynnub</code>
            </Link>
          </Menu.Item>
          <Menu.SubMenu key="text" title="Text">
            <Menu.Item key="/base/text/paragraphs">
              <Link href="/base/text/paragraphs">Paragraphs</Link>
            </Menu.Item>
            <Menu.Item key="/base/text/citations">
              <Link href="/base/text/citations">Citations</Link>
            </Menu.Item>
            <Menu.Item key="/base/text/code">
              <Link href="/base/text/code">Code</Link>
            </Menu.Item>
            <Menu.Item key="/base/text/inline">
              <Link href="/base/text/inline">Inline</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </nav>
    </Layout.Sider>
  );
};
