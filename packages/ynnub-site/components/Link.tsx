/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Link from 'next/link';

export default (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { href: string },
) => (
  <Link
    href={props.href}
    as={`${process.env.NODE_ENV === 'production' ? '/ynnub' : ''}${props.href}`}
  >
    <a {...props} />
  </Link>
);
