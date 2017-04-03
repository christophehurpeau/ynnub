import s from './list/base.scss';
import type { ReactElementType } from '../types';

export ListItem from './ListItem';

type PropsType = {
  className: ?string,
  ordered: ?boolean,
  multiline: ?boolean,
  links: ?boolean,
  children: Array<ReactElementType> | ReactElementType,
}

export default ({
  className,
  ordered,
  multiline,
  links,
  children,
  ...otherProps
}: PropsType): ReactNodeType => {
  const TagName = ordered ? 'ol' : 'ul';
  return (
    <TagName
      className={[
        s.list,
        multiline && s.multiline,
        links && s.links,
        className,
      ].filter(Boolean).join(' ')}
      {...otherProps}
    >
      {children}
    </TagName>
  );
}
