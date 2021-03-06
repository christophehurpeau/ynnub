import Code from 'babel-plugin-jsx-code/Component';
import React from 'react';
import { Typography } from 'antd';
import Layout, { RenderCode } from '../../../components/Layout';
import 'ynnub/text/blockquote.scss';
import 'ynnub/text/quote.scss';

export default () => (
  <Layout>
    <Typography.Title>Citations</Typography.Title>

    <Typography.Title level={2}>
      {'<blockquote>'}: block quotation
    </Typography.Title>

    <pre>import 'ynnub/text/blockquote.scss';</pre>

    <Code render={RenderCode}>
      <blockquote cite="http://developer.mozilla.org">
        <p>This is a quotation taken from the Mozilla Developer Center.</p>
        <footer>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
            MDN: blockquote element
          </a>
        </footer>
      </blockquote>
    </Code>

    <Typography.Title level={2}>
      {'<cite>'}: cited title of a work
    </Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/cite.html">cite element</a>{' '}
      represents the cited title of a work; for example, the title of a book
      mentioned within the main text flow of a document..
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite">
      MDN: cite element
    </a>

    <Code render={RenderCode}>
      <p>
        My favourite TV series is <cite>Game of Thrones</cite>.
      </p>
    </Code>

    <Typography.Title level={2}>{'<q>'}: quoted text</Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/q.html">q element</a>{' '}
      represents phrasing content quoted from another source.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
      MDN: q element
    </a>

    <Code render={RenderCode}>
      <p>
        Everytime Kenny is killed, Stan will announce{' '}
        <q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">
          Oh my God, you/they killed Kenny!
        </q>
        .
      </p>
    </Code>
  </Layout>
);
