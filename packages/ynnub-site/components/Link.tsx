/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

export default (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) => (
  <Link
    href={props.href}
    as={`${process.env.NODE_ENV === 'production' ? '/ynnub' : ''}${props.href}`}
  >
    <a {...props} />
  </Link>
);
