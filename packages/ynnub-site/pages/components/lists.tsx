import Code from 'babel-plugin-jsx-code/Component';
import { FlexGrid, FlexItems } from 'ynnub/grid/flex';
import List, {
  ListItem,
  ListDivider,
  ListItemStartDetailProps,
} from 'ynnub/components/List';
import SimpleList from 'ynnub/components/SimpleList';
import VerticalList from 'ynnub/components/VerticalList';
import Block from 'ynnub/components/Block';
import typography from 'ynnub/text/typography';
import { MdWifi, MdBluetooth } from 'react-icons/md';
import Layout, { RenderCode } from '../../components/Layout';

const GreyBackground = (props: ListItemStartDetailProps) => (
  <span {...props} style={{ backgroundColor: 'rgba(0, 0, 0, .26)' }} />
);

export default () => (
  <Layout>
    <h1 className={typography.headline}>Lists</h1>

    <h2 className={typography.title}>Imports</h2>

    <pre>
      <code>{`import List, { ListItem } from 'ynnub/components/List';`}</code>
    </pre>

    <h2 className={typography.title}>Text only</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap" justifyContent="space-between">
        <FlexItems grow padding="1rem" style={{ minWidth: '180px' }}>
          <List>
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
            <ListDivider />
            <ListItem text="Item 3" />
          </List>

          <List dense>
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
            <ListItem text="Item 3" />
          </List>

          <List twoLine>
            <ListItem text="Item 1" secondaryText="Secondary Text 1" />
            <ListItem text="Item 2" secondaryText="Secondary Text 2" />
            <ListDivider inset />
            <ListItem text="Item 3" secondaryText="Secondary Text 3" />
          </List>

          <List twoLine dense>
            <ListItem text="Item 1" secondaryText="Secondary Text 1" />
            <ListItem text="Item 2" secondaryText="Secondary Text 2" />
            <ListItem text="Item 3" secondaryText="Secondary Text 3" />
          </List>
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Start Detail</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap" justifyContent="space-between">
        <FlexItems grow padding="1rem" style={{ minWidth: '180px' }}>
          <List>
            <ListItem startDetail={GreyBackground} text="Item 1" />
            <ListItem startDetail={GreyBackground} text="Item 2" />
            <ListItem startDetail={GreyBackground} text="Item 3" />
          </List>

          <List dense>
            <ListItem startDetail={GreyBackground} text="Item 1" />
            <ListItem startDetail={GreyBackground} text="Item 2" />
            <ListItem startDetail={GreyBackground} text="Item 3" />
          </List>

          <List>
            <ListItem startDetail={MdWifi} text="Wifi" />
            <ListItem startDetail={MdBluetooth} text="Bluetooth" />
          </List>

          <List dense>
            <ListItem startDetail={MdWifi} text="Wifi" />
            <ListItem startDetail={MdBluetooth} text="Bluetooth" />
          </List>

          <List avatar>
            <ListItem startDetail={GreyBackground} text="Item 1" />
            <ListItem startDetail={GreyBackground} text="Item 2" />
            <ListItem startDetail={GreyBackground} text="Item 3" />
          </List>

          <List avatar dense>
            <ListItem startDetail={GreyBackground} text="Item 1" />
            <ListItem startDetail={GreyBackground} text="Item 2" />
            <ListItem startDetail={GreyBackground} text="Item 3" />
          </List>
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>End Detail</h2>

    <Code render={RenderCode}>
      <FlexGrid flow="row wrap" justifyContent="space-between">
        <FlexItems grow padding="1rem" style={{ minWidth: '180px' }}>
          <List>
            <ListItem endDetail={GreyBackground} text="Item 1" />
            <ListItem endDetail={GreyBackground} text="Item 2" />
            <ListItem endDetail={GreyBackground} text="Item 3" />
          </List>

          <List dense>
            <ListItem endDetail={GreyBackground} text="Item 1" />
            <ListItem endDetail={GreyBackground} text="Item 2" />
            <ListItem endDetail={GreyBackground} text="Item 3" />
          </List>

          <List>
            <ListItem endDetail={MdWifi} text="Wifi" />
            <ListItem endDetail={MdBluetooth} text="Bluetooth" />
          </List>

          <List dense>
            <ListItem endDetail={MdWifi} text="Wifi" />
            <ListItem endDetail={MdBluetooth} text="Bluetooth" />
          </List>

          <List avatar>
            <ListItem endDetail={GreyBackground} text="Item 1" />
            <ListItem endDetail={GreyBackground} text="Item 2" />
            <ListItem endDetail={GreyBackground} text="Item 3" />
          </List>

          <List avatar dense>
            <ListItem endDetail={GreyBackground} text="Item 1" />
            <ListItem endDetail={GreyBackground} text="Item 2" />
            <ListItem endDetail={GreyBackground} text="Item 3" />
          </List>
        </FlexItems>
      </FlexGrid>
    </Code>

    <h2 className={typography.title}>Simple list</h2>

    <pre>
      <code>import SimpleList from 'ynnub/components/SimpleList';</code>
    </pre>

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

    <h2 className={typography.title}>Link list</h2>

    <Code render={RenderCode}>
      <List interactive>
        <ListItem href="#" text="Item 1" />
        <ListItem href="#" text="Item 2" />
        <ListItem href="#" text="Item 3" className="current" />
        <ListItem href="#" text="Item 4" />
      </List>
    </Code>

    <h2 className={typography.title}>Vertical list</h2>

    <pre>
      <code>
        {`
import VerticalList from 'ynnub/components/VerticalList';
`.trim()}
      </code>
    </pre>

    <Code render={RenderCode}>
      <VerticalList>
        <ListItem text="Item 1" />
        <ListItem text="Item 2" />
        <ListItem text="Item 3" />
        <ListItem text="Item 4" />
      </VerticalList>
    </Code>

    <h2 className={typography.title}>List with borders</h2>

    <pre>
      <code>import BlockList from 'ynnub/components/BlockList';</code>
    </pre>

    <Code render={RenderCode}>
      <List as={Block}>
        <ListItem text="Item 1" />
        <ListItem text="Item 2" />
        <ListItem text="Item 3" />
      </List>
    </Code>
  </Layout>
);
