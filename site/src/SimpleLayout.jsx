import { AlpHtml as Html, AlpHead, AlpBody, classNames } from 'alp-react-redux/src';
import type { LayoutPropsType } from 'alp-react-redux/src/types';
import 'ynnub/reset.global.scss';
import 'ynnub/layout/page.global.scss';
import sHolyGrail from 'ynnub/layout/holygrail.scss';
import 'ynnub/interactions/interactions.global.scss';
import { content as contentClassName } from 'ynnub/layout/content.scss';
import type { ReactElementType } from '../types';
import Sidebar from './Sidebar';

export default ({ helmet, content, ...props }: LayoutPropsType): ReactElementType => (
  <Html helmet={helmet}>
    <AlpHead helmet={helmet} {...props} styleName="styles" scriptName={false} />
    <AlpBody className={classNames(sHolyGrail.container, sHolyGrail.body)}>
      <Sidebar className={sHolyGrail.aside} />
      <div
        className={classNames(sHolyGrail.content, contentClassName)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </AlpBody>
  </Html>
);
