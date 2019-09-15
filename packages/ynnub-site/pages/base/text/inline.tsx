import Code from 'babel-plugin-jsx-code/Component';
import React from 'antd';
import { Typography } from 'antd';
import 'ynnub/text/blockquote.scss';
import 'ynnub/text/quote.scss';
import sTextSpellCheck from 'ynnub/text/spell-check.scss';
import Layout, { RenderCode } from '../../../components/Layout';

export default () => (
  <Layout>
    <Typography.Title>Styling text: inline</Typography.Title>

    <pre>import 'ynnub/text/inline.scss';</pre>

    <Typography.Title level={2}>
      {'<mark>'}: marked (highlighted) text
    </Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/mark.html">mark element</a>{' '}
      represents a run of text in one document marked or highlighted for
      reference purposes, due to its relevance in another context.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark">
      MDN: mark element
    </a>

    <Code render={RenderCode}>
      <p>
        This is an example of <mark>highlighted</mark> text.
      </p>
    </Code>

    <Typography.Title level={2}>{'<del>'}: deleted text</Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/del.html">del element</a>{' '}
      represents a range of text that has been deleted from a document.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del">
      MDN: del element
    </a>

    <Code render={RenderCode}>
      <p>
        This is an example of <del>deleted</del> text.
      </p>
    </Code>

    <Typography.Title level={2}>{'<s>'}: struck text</Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/s.html">s element</a>{' '}
      represents contents that are no longer accurate or no longer relevant and
      that therefore has been “struck” from the document.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s">
      MDN: s element
    </a>

    <Code render={RenderCode}>
      <p>
        This is an example of <s>irreleveant</s> text.
      </p>
    </Code>

    <Typography.Title level={2}>{'<ins>'}: inserted text</Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/ins.html">ins element</a>{' '}
      represents a range of text that has been inserted (added) to a document.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins">
      MDN: ins element
    </a>

    <Code render={RenderCode}>
      <p>
        This is an example of <ins>inserted</ins> text.
      </p>
    </Code>

    <Typography.Title level={2}>{'<em>'}: emphatic stress</Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/em.html">em element</a>{' '}
      represents a span of text a span of text with emphatic stress.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em">
      MDN: em element
    </a>

    <Code render={RenderCode}>
      <p>
        Just <em>do</em> it already!
      </p>
    </Code>

    <Typography.Title level={2}>{'<small>'}: small print</Typography.Title>

    <p>
      The{' '}
      <a href="http://www.w3.org/TR/html-markup/small.html">small element</a>{' '}
      represents a small print.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small">
      MDN: small element
    </a>

    <p>
      <small>
        Side-comments and small print, including copyright and legal text,
        independent of its styled presentation.
      </small>
    </p>

    <Code render={RenderCode}>
      <small>
        Side-comments and small print, including copyright and legal text,
        independent of its styled presentation.
      </small>
    </Code>

    <Typography.Title level={2}>
      {'<u>'}: offset text conventionally styled with an underline
    </Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/u.html">u element</a>{' '}
      represents a span of text offset from its surrounding content without
      conveying any extra emphasis or importance.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u">
      MDN: u element
    </a>

    <Typography.Title level={3}>
      {'<u>'}: Chinese proper name marks
    </Typography.Title>

    <blockquote>
      <p>
        In Chinese writing, a proper name mark (Simplified Chinese:{' '}
        <span lang="Hans">专名号</span>,{' '}
        <span lang="zh-Latn">zhuānmínghào</span>; Traditional Chinese:{' '}
        <span lang="Hant">專名號</span>) is an underline used to mark proper
        names, such as the names of people, places, dynasties, organizations. …
        This method of recognizing proper names in text is similar to the
        English use of a capital letter.
      </p>
      <footer>
        <cite>
          <a
            href="http://en.wikipedia.org/wiki/Proper_name_mark"
            title="Proper name mark - Wikipedia, the free encyclopedia"
          >
            Proper name mark
          </a>
        </cite>
        , Wikipedia
      </footer>
    </blockquote>

    <p>
      Wikipedia gives the following example, which can be formatted using{' '}
      {'<u>'}:
    </p>

    <Code render={RenderCode}>
      <p>
        <u className="pnm">屈原</u>放逐，乃賦<cite className="bnm">離騒</cite>。
        <u className="pnm">左丘</u>失明，厥有<cite className="bnm">國語</cite>
        。（司馬遷 《<cite>報任安書</cite>》
      </p>
    </Code>

    <Typography.Title level={3}>
      {'<u>'}: Spell-checking feedback
    </Typography.Title>

    <pre>import sTextSpellCheck 'ynnub/text/spell-check.scss';</pre>

    <Code render={RenderCode}>
      <p>
        This is an example of{' '}
        <u className={sTextSpellCheck.spellingError}>a spelling error</u> and{' '}
        <u className={sTextSpellCheck.grammaticalError}>a grammatical error</u>.
      </p>
    </Code>

    <p>
      Source:{' '}
      <a href="http://html5doctor.com/u-element/">
        http://html5doctor.com/u-element/
      </a>
    </p>

    <Typography.Title level={2}>
      {'<i>'}: offset text conventionally styled with an italic
    </Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/i.html">i element</a>{' '}
      represents a span of text offset from its surrounding content without
      conveying any extra emphasis or importance, and for which the conventional
      typographic presentation is italic text; for example, a taxonomic
      designation, a technical term, an idiomatic phrase from another language,
      a thought, or a ship name.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i">
      MDN: i element
    </a>

    <Code render={RenderCode}>
      <p>
        The Latin phrase <i>Veni, vidi, vici</i> is often mentioned in music,
        art, and literature.
      </p>
    </Code>

    <Typography.Title level={2}>
      {'<b>'}: offset text conventionally styled in bold
    </Typography.Title>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/b.html">b element</a>{' '}
      represents a span of text offset from its surrounding content without
      conveying any extra emphasis or importance, and for which the conventional
      typographic presentation is bold text; for example, keywords in a document
      abstract, or product names in a review.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b">
      MDN: b element
    </a>

    <Code render={RenderCode}>
      <p>
        This article describes several <b>text-level</b> elements. It explains
        their usage in an <b>HTML</b> document.
      </p>
    </Code>
  </Layout>
);

/*

 TODO:
 <Typography.Title level={2}>{'<dfn>'}/{'<abbr>'}: dfn importance</Typography.Title>


 <p>I do <abbr title="Hypertext Markup Language">HTML</abbr></p>

 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn">MDN: dfn element</a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr">MDN: abbr element</a>


 data, time, sub, sup, ruby, rb, rt, rtc, rp, bdi, bdo
 */
