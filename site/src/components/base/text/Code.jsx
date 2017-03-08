import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../../RenderCode';
import 'ynnub/text/code.scss';
import sHeadings from 'ynnub/text/headings.scss';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Code</h1>

    <h2 className={sHeadings.textTitle}>{'<code>'}: computer code</h2>

    <p>The <a href="http://www.w3.org/TR/html-markup/code.html">code element</a>
      {' '}represents a fragment of computer code.</p>

    <Code render={RenderCode}>
      <p>For example, <code>{'<code>'}</code> is a HTML start tag.</p>
    </Code>

    <h2 className={sHeadings.textTitle}>{'<kbd>'}: user imput</h2>

    <p>The <a href="http://www.w3.org/TR/html-markup/kbd.html">kbd element</a>
      {' '}represents user input, typically keyboard input, though it may also represent other input, such as voice commands.</p>

    <Code render={RenderCode}>
      <p>Save the document by pressing <kbd><kbd>Ctrl</kbd>+<kbd>S</kbd></kbd></p>
    </Code>

    <h2 className={sHeadings.textTitle}>{'<pre>'}: Preformatted Text</h2>

    <p>The <a href="http://www.w3.org/TR/html-markup/pre.html">pre element</a>
      {' '}represents a block of preformatted text, in which structure is represented
      {' '}by typographic conventions rather than by elements.</p>

    <Code render={RenderCode}>
      <pre>
        {'body { color: red; }'}
      </pre>
    </Code>

    <h2 className={sHeadings.textTitle}>{'<var>'}: variable or placeholder text</h2>

    <p>The <a href="http://www.w3.org/TR/html-markup/var.html">var element</a>
      {' '}represents either a variable in a mathematical expression or programming context,
      {' '}or placeholder text that the reader is meant to mentally replace with some other literal value.</p>

    <Code render={RenderCode}>
      <p>A simple equation: <var>x</var> = <var>y</var> + 2</p>
    </Code>

    <h2 className={sHeadings.textTitle}>{'<samp>'}: Sample output</h2>

    <p>The <a href="http://www.w3.org/TR/html-markup/samp.html">samp element</a>
      {' '}represents (sample) output from a program or computing system.</p>

    <Code render={RenderCode}>
      <p>The result is: <samp>Hello World !</samp></p>
    </Code>
  </div>
)
