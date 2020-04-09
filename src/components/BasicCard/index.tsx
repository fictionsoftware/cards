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
}

export const BasicCard: FC<Props> = ({ imgUrl, imgAlt, size, shadow, rounded, style, children }) => {
  const getStyle = clsx({[styles.shadow]: shadow, [styles.rounded]: rounded}, styles.BasicCard);
  const imageStyles = rounded ? styles.image__rounded : styles.image;
  
  return (
    <div className={ getStyle } style={{ ...style, width: size, height: size * 1.5 }}> 
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