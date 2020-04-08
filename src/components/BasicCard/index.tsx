import React, { FC } from 'react';

import { Size } from '../../models';
import { _BasicCard } from './index.stories';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  size: Size | number;
  imgUrl?: string;
  imgAlt?: string;
  shadow?: boolean;
  rounded?: boolean;
}

export const BasicCard: FC<Props> = ({ imgUrl, imgAlt, size, shadow, rounded, children }) => {
  const getStyle = clsx({[styles.shadow]: shadow, [styles.rounded]: rounded}, styles.BasicCard);
  const imageStyles = rounded ? styles.image__rounded : styles.image;
  
  return (
    <div className={ getStyle } style={{ width: size, height: size * 1.5 }}> 
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