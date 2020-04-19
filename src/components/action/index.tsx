import React, { FC, useState } from 'react';

import CSS from 'csstype';
import { Shape } from '../../models';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
    shape?: Shape;
    hoverable?: boolean;
    hoverColor?: string;
    style?: CSS.Properties;
    className?: string;
}

export const Action: FC<Props> = ({ shape, hoverable, hoverColor, style, className, children }) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const resolveClassName = clsx(
    styles.Action,
    shape === Shape.CIRCLE && styles.circle ,
    className !== undefined && className,
  );
  const resolveStyle = hovering
    ? { ...style, cursor: 'pointer', boxShadow: `0 2px 14px ${hoverColor ?? 'rgba(255,75,75,.5)'}`}
    : { ...style };

  const onHover = () => {
      if (hoverable) {
          setHovering(true);
      }
  }

  const reset = () => {
    setHovering(false);
  }
  
  return (
    <div
      className={ resolveClassName }
      style={ resolveStyle }
      onMouseOver={ onHover }
      onMouseOut={ reset }
    >
      {children}
    </div>
  );
};