import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import { FlexGrid, FlexItems } from 'ynnub/grid/flex';
import typography from 'ynnub/text/typography';
import Dropdown from 'ynnub/components/Dropdown';
import VerticalList from 'ynnub/components/VerticalList';

export default () => (
  <div>
    <h1 className={typography.headline}>Dropdown</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import Dropdown from 'ynnub/components/Dropdown';
`.trim()}</code></pre>

    <h2 className={typography.title}>Dropdown Button</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Dropdown button label="Actions">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </Dropdown>

          <Dropdown button disabled label="Disabled">
            <li>Item 1</li>
            <li>Item 2</li>
          </Dropdown>

          <Dropdown button flat label="Flat">
            <li>Item 1</li>
            <li>Item 2</li>
          </Dropdown>

          <Dropdown button flat disabled label="Flat Disabled">
            <li>Item 1</li>
            <li>Item 2</li>
          </Dropdown>

          <Dropdown button compact label="Compact">
            <li>Item 1</li>
            <li>Item 2</li>
          </Dropdown>

          <Dropdown button dense label="Dense">
            <li>Item 1</li>
            <li>Item 2</li>
          </Dropdown>
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Dropdown Menu</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <VerticalList>
            <li>Item 1</li>
            <Dropdown as="li" label="Item 2">
              <li>Item 2.1</li>
              <li>Item 2.2</li>
              <li>Item 2.3</li>
              <li>Item 2.4</li>
              <li>Item 2.5</li>
            </Dropdown>
            <li>Item 3</li>
          </VerticalList>

          <VerticalList>
              <li>Item 1</li>
              <Dropdown disabled as="li" label="Item 2">
                <li>Item 2.1</li>
                <li>Item 2.2</li>
              </Dropdown>
          </VerticalList>
        </FlexItems>
      </FlexGrid>
    </Code>
  </div>
)
