import React, { FC } from 'react';

import { Action } from '../action';
import CSS from 'csstype';
import { Shape } from '../../models';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
    description: string,
    shape?: Shape,
    hoverable?: boolean,
    hoverColor?: string,
    title?: string,
    style?: CSS.Properties;
    className?: string;
}

export const ActionDetails: FC<Props> = ({
  shape,
  description,
  hoverable,
  hoverColor,
  title,
  style,
  className,
  children,
}) => {
  const resolveClassName = clsx(styles.ActionDetails, className !== undefined && className);

  return (
    <div className={ resolveClassName }>
       <Action
        shape={shape}
        hoverable={hoverable}
        hoverColor={hoverColor}
        style={style}
      >
        { children }
       </Action>
       <div className={ styles.container }>
            { title ? <div className={ styles.title }>{ title }</div> : null }
            <div className={ styles.desc }>{ description }</div>
       </div>
    </div>
);
};