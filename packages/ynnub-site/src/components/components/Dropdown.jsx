import Code from 'babel-plugin-jsx-code/Component';
import RenderCode from '../RenderCode';
import { FlexGrid, FlexItems } from 'ynnub/grid/flex';
import typography from 'ynnub/text/typography';
import Dropdown, { ListItem } from 'ynnub/components/Dropdown';
import VerticalList from 'ynnub/components/VerticalList';

export default () => (
  <div>
    <h1 className={typography.headline}>Dropdown</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre><code>{`
import Dropdown, { ListItem } from 'ynnub/components/Dropdown';
`.trim()}</code></pre>

    <h2 className={typography.title}>Dropdown Button</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <Dropdown button label="Actions">
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
            <ListItem text="Item 3" />
            <ListItem text="Item 4" />
            <ListItem text="Item 5" />
          </Dropdown>

          <Dropdown button disabled label="Disabled">
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
          </Dropdown>

          <Dropdown button flat label="Flat">
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
          </Dropdown>

          <Dropdown button flat disabled label="Flat Disabled">
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
          </Dropdown>

          <Dropdown button compact label="Compact">
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
          </Dropdown>

          <Dropdown button dense label="Dense">
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
          </Dropdown>
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Dropdown Menu</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap">
        <FlexItems padding="1rem">
          <VerticalList>
            <ListItem text="Item 1" />
            <Dropdown as="li" label="Item 2">
              <ListItem text="Item 2.1" />
              <ListItem text="Item 2.2" />
              <ListItem text="Item 2.3" />
              <ListItem text="Item 2.4" />
              <ListItem text="Item 2.5" />
            </Dropdown>
            <ListItem text="Item 3" />
          </VerticalList>

          <VerticalList>
            <ListItem text="Item 1" />
              <Dropdown disabled as="li" label="Item 2">
                <ListItem text="Item 2.1" />
                <ListItem text="Item 2.2" />
              </Dropdown>
          </VerticalList>
        </FlexItems>
      </FlexGrid>
    </Code>
  </div>
)
