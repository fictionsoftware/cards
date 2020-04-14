import React, { Children, FC, useState } from 'react';
import { animated, interpolate, useSprings } from 'react-spring';

import CSS from 'csstype';
import clsx from 'clsx';
import styles from './index.module.scss';
import { useGesture } from 'react-use-gesture';

interface Props {
    style?: CSS.Properties;
    className?: string;
}

const to = (i: number) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r: number, s: number) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export const Deck: FC<Props> = ({ style, className, children }) => {
  const resolveClassName = clsx(styles.Deck, className !== undefined && className);
  const cards = Children.toArray(children);

  return (
    <div className={ resolveClassName } style={{...style}}>
      {cards.map((card, index) => <div key={index} style={{ zIndex: index}}>{card}</div>)}
    </div>
  );
};