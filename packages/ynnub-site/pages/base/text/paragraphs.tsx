import Code from 'babel-plugin-jsx-code/Component';
import 'ynnub/text/code.scss';
import { Typography } from 'antd';
import Layout, { RenderCode } from '../../../components/Layout';

export default () => (
  <Layout>
    <Typography.Title>Paragraphs</Typography.Title>

    <Typography.Title level={2}>{'<p>'}: paragraph</Typography.Title>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      sodales congue nibh et sodales. Integer dapibus metus a quam pulvinar, nec
      lobortis lorem mattis. Aliquam odio arcu, accumsan et velit et, bibendum
      volutpat nisl. Praesent convallis sit amet magna a fermentum. Maecenas
      facilisis sapien libero, id bibendum lorem imperdiet a. Sed condimentum
      est ut aliquet auctor. Proin gravida mollis pharetra. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>

    <Typography.Title level={2}>{'<article>'}: article</Typography.Title>

    <p>
      The{' '}
      <a href="http://www.w3.org/TR/html-markup/article.html">
        article element
      </a>{' '}
      represents a section of content that forms an independent part of a
      document or site; for example, a magazine or newspaper article, or a blog
      entry.
    </p>

    <p>
      See <a href="http://html5doctor.com/the-article-element/">html5doctor</a>{' '}
      for more information
    </p>

    <Code render={RenderCode}>
      <article>
        <header>
          <Typography.Title>Apple</Typography.Title>
          <p>
            Published: <time itemProp="datePublished">2009-10-09</time>
          </p>
        </header>
        <p>
          The <b>apple</b> is the pomaceous fruit of the apple tree...
        </p>
        ...
        <footer>
          <p>
            <small>Creative Commons Attribution-ShareAlike License</small>
          </p>
        </footer>
      </article>
    </Code>
  </Layout>
);
