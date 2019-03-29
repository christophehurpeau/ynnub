import React from 'react';
import Code from 'babel-plugin-jsx-code/Component';
import typography from 'ynnub/text/typography';
import Card from 'ynnub/components/Card';
import Layout, { RenderCode } from '../../components/Layout';

export default () => (
  <Layout>
    <h1 className={typography.headline}>Cards</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre>
      <code>
        {`
import sCard from 'ynnub/components/card.scss';
`.trim()}
      </code>
    </pre>

    <h2 className={typography.title}>Basic card</h2>

    <Code render={RenderCode}>
      <Card>
        <Card.Content>
          <Card.Title>title</Card.Title>
          content
        </Card.Content>
      </Card>
    </Code>
  </Layout>
);
