import classNames from 'classnames';
import sAside from 'ynnub/layout/aside.scss';
import List, { ListItem } from 'ynnub/components/List';
import typography from '../../ynnub/text/typography';
import Link from '../components/Link';

export interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <aside
    className={classNames(className, sAside.aside)}
    style={{ flexBasis: '200px' }}
  >
    <nav>
      <List>
        <ListItem
          as={Link}
          href="/"
          className={typography.title}
          text={<code>ynnub</code>}
        />
        <ListItem as={Link} href="/base/layout" text="Layout" />
        <li>
          Text
          <List>
            <ListItem
              as={Link}
              href="/base/text/typography"
              text="Typography"
            />
            <ListItem
              as={Link}
              href="/base/text/paragraphs"
              text="Paragraphs"
            />
            <ListItem as={Link} href="/base/text/citations" text="Citations" />
            <ListItem as={Link} href="/base/text/code" text="Code" />
            <ListItem as={Link} href="/base/text/inline" text="Inline" />
          </List>
        </li>
        <ListItem as={Link} href="/base/form" text="Form" />
        <li>
          Components
          <List>
            <ListItem as={Link} href="/components/badges" text="Badges" />
            <ListItem as={Link} href="/components/blocks" text="Blocks" />
            <ListItem as={Link} href="/components/buttons" text="Buttons" />
            <ListItem as={Link} href="/components/cards" text="Cards" />
            <ListItem as={Link} href="/components/dropdown" text="Dropdown" />
            <ListItem as={Link} href="/components/labels" text="Labels" />
            <ListItem as={Link} href="/components/lists" text="Lists" />
            <ListItem
              as={Link}
              href="/components/loading-bar"
              text="Loading Bar"
            />
            <ListItem as={Link} href="/components/tables" text="Tables" />
            <ListItem as={Link} href="/components/tabs" text="Tabs" />
          </List>
        </li>
      </List>
    </nav>
  </aside>
);
