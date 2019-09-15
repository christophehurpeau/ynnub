import React from 'react';
import { Layout as AntdLayout } from 'antd';
import Sidebar from '../src/Sidebar';
import 'antd/dist/antd.css';
import 'ynnub/text/code.scss';

export { default as RenderCode } from './RenderCode';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <React.StrictMode>
    <AntdLayout hasSider>
      <Sidebar />
      <AntdLayout.Content style={{ padding: '0 24px 24px' }}>
        {children}
      </AntdLayout.Content>
    </AntdLayout>
  </React.StrictMode>
);

export default Layout;
