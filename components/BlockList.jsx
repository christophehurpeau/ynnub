import List from './List';
import sListBlock from './list/block.scss';
import sBlock from './block.scss';

export { ListItem } from './List';

type PropsType = {
  className: ?string,
  primary: ?boolean,
}

export default ({ className, primary, children, props }: PropsType) => (
  <List
    className={[
      sBlock.block,
      sListBlock.listBlock,
      primary && sBlock.primary,
      className,
    ].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </List>
);
