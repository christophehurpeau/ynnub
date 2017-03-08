import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import sHeadings from 'ynnub/text/headings.scss';
import Dropdown from 'ynnub/components/Dropdown';
import VerticalList from 'ynnub/components/VerticalList';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Dropdown</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`
import Dropdown from 'ynnub/components/Dropdown';
`.trim()}</code></pre>

    <h2 className={sHeadings.textTitle}>Dropdown Button</h2>

    <Code render={RenderCode}>
      <Dropdown button label="Actions">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </Dropdown>
    </Code>

    <Code render={RenderCode}>
      <Dropdown button disabled label="Actions">
        <li>Item 1</li>
        <li>Item 2</li>
      </Dropdown>
    </Code>

    <h2 className={sHeadings.textTitle}>Dropdown Menu</h2>

    <Code render={RenderCode}>
      <VerticalList>
        <li>Item 1</li>
        <Dropdown tagName="li" label="Item 2">
          <li>Item 2.1</li>
          <li>Item 2.2</li>
          <li>Item 2.3</li>
          <li>Item 2.4</li>
          <li>Item 2.5</li>
        </Dropdown>
        <li>Item 3</li>
      </VerticalList>
    </Code>

    <Code render={RenderCode}>
      <VerticalList>
          <li>Item 1</li>
          <Dropdown disabled tagName="li" label="Item 2">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
          </Dropdown>
      </VerticalList>
    </Code>
  </div>
)
