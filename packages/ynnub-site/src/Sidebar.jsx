import { classNames } from 'alp-react-redux';
import sAside from 'ynnub/layout/aside.scss';
import typography from 'ynnub/text/typography';
import List, { ListItem } from 'ynnub/components/List';

type PropsType = {
  className?: ?string,
};

export default ({ className }: PropsType) => (
  <aside className={classNames(className, sAside.aside)} style={{ flexBasis: '200px' }}>
    <nav>
      <List>
        <ListItem href="/" className={typography.title} text={<code>ynnub</code>} />
        <ListItem href="/base/layout" text="Layout" />
        <li>
          Text
          <List>
            <ListItem href="/base/text/typography" text="Typography" />
            <ListItem href="/base/text/paragraphs" text="Paragraphs" />
            <ListItem href="/base/text/citations" text="Citations" />
            <ListItem href="/base/text/code" text="Code" />
            <ListItem href="/base/text/inline" text="Inline" />
          </List>
        </li>
        <ListItem href="/base/form" text="Form" />
        <li>
          Components
          <List>
            <ListItem href="/components/badges" text="Badges" />
            <ListItem href="/components/blocks" text="Blocks" />
            <ListItem href="/components/buttons" text="Buttons" />
            <ListItem href="/components/cards" text="Cards" />
            <ListItem href="/components/dropdown" text="Dropdown" />
            <ListItem href="/components/labels" text="Labels" />
            <ListItem href="/components/lists" text="Lists" />
            <ListItem href="/components/tables" text="Tables" />
            <ListItem href="/components/tabs" text="Tabs" />
          </List>
        </li>
      </List>
    </nav>
  </aside>
)
