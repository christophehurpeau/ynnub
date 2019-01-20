import classNames from 'classnames';
import React from 'react';
import 'ynnub/reset.global.scss';
import 'ynnub/layout/page.global.scss';
import 'ynnub/interactions/interactions.global.scss';
import sHolyGrail from 'ynnub/layout/holygrail.scss';
import { content as contentClassName } from 'ynnub/layout/content.scss';
import Sidebar from '../src/Sidebar';
import 'ynnub/text/code.scss';

export { default as RenderCode } from './RenderCode';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className={classNames(sHolyGrail.container, sHolyGrail.body)}>
    <React.StrictMode>
      <Sidebar className={sHolyGrail.aside} />
      <div className={classNames(sHolyGrail.content, contentClassName)}>
        {children}
      </div>
    </React.StrictMode>
  </div>
);

export default Layout;
