import Code from 'babel-plugin-jsx-code/Component';
import List, { ListItem } from 'ynnub/components/List';
import SimpleList from 'ynnub/components/SimpleList';
import BlockList from 'ynnub/components/BlockList';
import VerticalList from 'ynnub/components/VerticalList';
import SelectableList from 'ynnub/components/SelectableList';
import sHeadings from 'ynnub/text/headings.scss';
import { textCaption as textCaptionClassName } from 'ynnub/text/caption.scss';
import RenderCode from '../RenderCode';

export default () => (
  <div>
    <h1 className={sHeadings.pageTitle}>Lists</h1>

    <h2 className={sHeadings.textTitle}>Imports</h2>

    <pre><code>{`import List, { ListItem } from 'ynnub/components/List';`}</code></pre>


    <h2 className={sHeadings.textTitle}>Basic list</h2>

    <Code render={RenderCode}>
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
    </Code>

    <h2 className={sHeadings.textTitle}>Multiline list</h2>

    <Code render={RenderCode}>
      <List multiline>
        {[1, 2, 3].map(idx => (
          <li key={idx}>
            Item {idx}<br />
            <span className={textCaptionClassName}>This is item {idx}</span>
          </li>
        ))}
      </List>
    </Code>

    <h2 className={sHeadings.textTitle}>Simple list</h2>

    <pre><code>{`import List, { ListItem } from 'ynnub/components/List';`}</code></pre>

    <Code render={RenderCode}>
      <div>
        Simple:
        <SimpleList>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </SimpleList>

        Ordered:
        <SimpleList ordered>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </SimpleList>
      </div>
    </Code>

    <h2 className={sHeadings.textTitle}>Link list</h2>

    <Code render={RenderCode}>
      <List links>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#" className="current">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </List>
    </Code>

    <pre><code>{`
import SelectableList from 'ynnub/components/SelectableList';
`.trim()}</code></pre>


    <Code render={RenderCode}>
      <SelectableList>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#" className="current">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </SelectableList>
    </Code>

    <h2 className={sHeadings.textTitle}>Vertical list</h2>

    <pre><code>{`
import VerticalList from 'ynnub/components/VerticalList';
`.trim()}</code></pre>

    <Code render={RenderCode}>
      <VerticalList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </VerticalList>
    </Code>

    <h2 className={sHeadings.textTitle}>List with borders</h2>

    <pre><code>{`import BlockList from 'ynnub/components/BlockList';`}</code></pre>

    <Code render={RenderCode}>
      <BlockList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </BlockList>
    </Code>

    <Code render={RenderCode}>
      <BlockList primary>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </BlockList>
    </Code>


    <h2 className={sHeadings.textTitle}>ListItem</h2>

    <Code render={RenderCode}>
      <List>
        <ListItem badge={0}>Item 1</ListItem>
        <ListItem badge={1}>Item 2</ListItem>
        <ListItem badge={2}>Item 3</ListItem>
      </List>
    </Code>
  </div>
)
