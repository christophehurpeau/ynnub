import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../../RenderCode';
import 'ynnub/text/blockquote.scss';
import 'ynnub/text/quote.scss';
import typography from 'ynnub/text/typography';
import sTextSpellCheck from 'ynnub/text/spell-check.scss';

export default () => (
  <div>
    <h1 className={typography.headline}>Styling text: inline</h1>

    <pre>
      {"import 'ynnub/text/inline.scss';"}
    </pre>

    <h2 className={typography.title}>{'<mark>'}: marked (highlighted) text</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/mark.html">mark element</a>
      represents a run of text in one document marked or highlighted for reference purposes,
      due to its relevance in another context.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark">MDN: mark element</a>

    <Code render={RenderCode}>
      <p>
        This is an example of <mark>highlighted</mark> text.
      </p>
    </Code>

    <h2 className={typography.title}>{'<del>'}: deleted text</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/del.html">del element</a>
      represents a range of text that has been deleted from a document.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del">MDN: del element</a>

    <Code render={RenderCode}>
      <p>
        This is an example of <del>deleted</del> text.
      </p>
    </Code>


    <h2 className={typography.title}>{'<s>'}: struck text</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/s.html">s element</a>
      represents contents that are no longer accurate
      or no longer relevant and that therefore has been “struck” from the document.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s">MDN: s element</a>

    <Code render={RenderCode}>
      <p>This is an example of <s>irreleveant</s> text.</p>
    </Code>


    <h2 className={typography.title}>{'<ins>'}: inserted text</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/ins.html">ins element</a>
      represents a range of text that has been inserted (added) to a document.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins">MDN: ins element</a>


    <Code render={RenderCode}>
      <p>This is an example of <ins>inserted</ins> text.</p>
    </Code>

    <h2 className={typography.title}>{'<em>'}: emphatic stress</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/em.html">em element</a>
      represents a span of text a span of text with emphatic stress.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em">MDN: em element</a>


    <Code render={RenderCode}>
      <p>Just <em>do</em> it already!</p>
    </Code>

    <h2 className={typography.title}>{'<small>'}: small print</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/small.html">small element</a>
      represents a small print.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small">MDN: small element</a>

    <p>
      <small>Side-comments and small print, including copyright and legal text,
            independent of its styled presentation.</small>
    </p>

    <Code render={RenderCode}>
      <small>Side-comments and small print, including copyright and legal text,
            independent of its styled presentation.</small>
    </Code>

    <h2 className={typography.title}>{'<u>'}: offset text conventionally styled with an underline</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/u.html">u element</a>
      represents a span of text offset from its surrounding content
      without conveying any extra emphasis or importance.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u">MDN: u element</a>

    <h3 className={typography.title}>{'<u>'}: Chinese proper name marks</h3>

    <blockquote>
      <p>In Chinese writing, a proper name mark (Simplified Chinese: <span lang="Hans">专名号</span>, <span lang="zh-Latn">zhuānmínghào</span>; Traditional Chinese: <span lang="Hant">專名號</span>) is an underline used to mark proper names, such as the names of people, places, dynasties, organizations. … This method of recognizing proper names in text is similar to the English use of a capital letter.</p>
      <footer><cite><a href="http://en.wikipedia.org/wiki/Proper_name_mark" title="Proper name mark - Wikipedia, the free encyclopedia">Proper name mark</a></cite>, Wikipedia</footer>
    </blockquote>

    <p>Wikipedia gives the following example, which can be formatted using {'<u>'}:</p>

    <Code render={RenderCode}>
      <p>
        <u class="pnm">屈原</u>放逐，乃賦<cite class="bnm">離騒</cite>。<u class="pnm">左丘</u>失明，厥有<cite class="bnm">國語</cite>。（司馬遷 《<cite>報任安書</cite>》
      </p>
    </Code>

    <h3 className={typography.title}>{'<u>'}: Spell-checking feedback</h3>

    <pre>
      {"import sTextSpellCheck 'ynnub/text/spell-check.scss';"}
    </pre>

    <Code render={RenderCode}>
      <p>This is an example of <u className={sTextSpellCheck.spellingError}>a spelling error</u>
        {' '} and <u className={sTextSpellCheck.grammaticalError}>a grammatical error</u>.</p>
    </Code>

    <p>Source: <a href="http://html5doctor.com/u-element/">http://html5doctor.com/u-element/</a></p>


    <h2 className={typography.title}>{'<i>'}: offset text conventionally styled with an italic</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/i.html">i element</a>
      represents a span of text offset from its surrounding content without conveying any extra emphasis or importance,
      and for which the conventional typographic presentation is italic text; for example, a taxonomic designation,
      a technical term, an idiomatic phrase from another language, a thought, or a ship name.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i">MDN: i element</a>

    <Code render={RenderCode}>
      <p>The Latin phrase <i>Veni, vidi, vici</i> is often mentioned in music, art, and literature.</p>
    </Code>

    <h2 className={typography.title}>{'<b>'}: offset text conventionally styled in bold</h2>

    <p>
      The <a href="http://www.w3.org/TR/html-markup/b.html">b element</a>
      represents a  span of text offset from its surrounding content without conveying any extra emphasis or importance,
      and for which the conventional typographic presentation is bold text; for example, keywords in a document abstract,
      or product names in a review.
    </p>

    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b">MDN: b element</a>

    <Code render={RenderCode}>
      <p>
        This article describes several <b>text-level</b> elements. It explains their usage in an <b>HTML</b> document.
      </p>
    </Code>
  </div>
)

/*

 TODO:
 <h2 className={typography.title}>{'<dfn>'}/{'<abbr>'}: dfn importance</h2>


 <p>I do <abbr title="Hypertext Markup Language">HTML</abbr></p>

 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn">MDN: dfn element</a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr">MDN: abbr element</a>


 data, time, sub, sup, ruby, rb, rt, rtc, rp, bdi, bdo
 */
