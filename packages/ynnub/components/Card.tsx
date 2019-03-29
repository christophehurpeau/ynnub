import classNames from 'classnames';
import React from 'react';
import typography from '../text/typography';
import s from './card.scss';

interface TitleProps {
  level?: keyof typeof typography;
  children: NonNullable<React.ReactNode>;
}

function Title({ level = 'headline', children }: TitleProps) {
  return <h3 className={[typography[level], s.title].join(' ')}>{children}</h3>;
}

interface ContentProps {
  children: NonNullable<React.ReactNode>;
}

function Content({ children }: ContentProps) {
  return <div className={s.content}>{children}</div>;
}

interface CardProps {
  className?: string;
  children: NonNullable<React.ReactNode>;
}
export default function Card({ className, children }: CardProps) {
  return <div className={classNames(s.card, className)}>{children}</div>;
}

Card.Content = Content;
Card.Title = Title;
