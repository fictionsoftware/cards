import React, { Children, FC, useState } from 'react';
import { animated, interpolate, useSprings } from 'react-spring';

import CSS from 'csstype';
import Draggable from 'react-draggable';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
    style?: CSS.Properties;
    className?: string;
    offsetRange?: number;
}

export const Deck: FC<Props> = ({ style, className, offsetRange, children }) => {
  const resolveClassName = clsx(styles.Deck, className !== undefined && className);
  const cards = Children.toArray(children);
  const randomRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }

  const resolveInnerStyle = (index: number) => 
  offsetRange !== undefined
    ? {
      zIndex: index,
      transform: `rotate(${randomRange(-1 * offsetRange, offsetRange)}deg)`
    }
    : {
      zIndex: index,
    };

  return (
    <div className={ resolveClassName } style={{...style}}>
      {cards.map((card, index) => (
        <div style={resolveInnerStyle(index)} key={index}>
          <Draggable>
            {card}
          </Draggable>
        </div>
      ))}
    </div>
  );
};