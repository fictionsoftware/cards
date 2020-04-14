import React, { FC } from 'react';

import CSS from 'csstype';
import { Size } from '../../models';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  size: Size | number;
  imgUrl?: string;
  imgAlt?: string;
  shadow?: boolean;
  rounded?: boolean;
  style?: CSS.Properties;
  className?: string;
}

export const Card: FC<Props> = ({ imgUrl, imgAlt, size, shadow, rounded, style, className, children }) => {
  const resolveClassName = clsx({[styles.shadow]: shadow, [styles.rounded]: rounded}, styles.Card, className !== undefined && className);
  const imageStyles = rounded ? styles.image__rounded : styles.image;
  
  return (
    <div className={ resolveClassName } style={{ ...style, width: size, height: size * 1.5 }}> 
      { imgUrl ? 
          <div className={imageStyles}>
            <img src={imgUrl} alt={ imgAlt ?? ''} />
          </div>
          : null
      }
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};