import { classNames } from 'alp-react-redux/src';
import sAside from 'ynnub/layout/aside.scss';
import sHeadings from 'ynnub/text/headings.scss';
import List from 'ynnub/components/List';

type PropsType = {
  className?: ?string,
};

export default ({ className }: PropsType) => (
  <aside className={classNames(className, sAside.aside)} style={{ flexBasis: '200px' }}>
    <nav>
      <List links>
        <li><a href="/" className={sHeadings.textTitle}><code>ynnub</code></a></li>
        <li><a href="/base/layout">Layout</a></li>
        <li>
          Text
          <List links>
            <li><a href="/base/text/headings">Headings</a></li>
            <li><a href="/base/text/paragraphs">Paragraphs</a></li>
            <li><a href="/base/text/citations">Citations</a></li>
            <li><a href="/base/text/code">Code</a></li>
            <li><a href="/base/text/inline">Inline</a></li>
          </List>
        </li>
        <li><a href="/base/form">Form</a></li>
        <li>
          Components
          <List links>
            <li><a href="/components/badges">Badges</a></li>
            <li><a href="/components/blocks">Blocks</a></li>
            <li><a href="/components/buttons">Buttons</a></li>
            <li><a href="/components/cards">Cards</a></li>
            <li><a href="/components/dropdown">Dropdown</a></li>
            <li><a href="/components/labels">Labels</a></li>
            <li><a href="/components/lists">Lists</a></li>
            <li><a href="/components/tables">Tables</a></li>
          </List>
        </li>
      </List>
    </nav>
  </aside>
)
