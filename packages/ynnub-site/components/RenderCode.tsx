import React from 'react';
import { RenderCodeProps } from 'babel-plugin-jsx-code/Component';
import 'ynnub/text/code.scss';
import { Typography } from 'antd';
import s from './RenderCode.scss';

export default ({ source, result }: RenderCodeProps) => (
  <div className={s.container}>
    <div className={s.code}>
      <Typography.Paragraph className={s.title}>Code</Typography.Paragraph>
      <pre>
        <code>{source}</code>
      </pre>
    </div>
    <div className={s.renderResult}>
      <Typography.Paragraph className={s.title}>Result</Typography.Paragraph>
      {result}
    </div>
  </div>
);
