import React, { FC } from 'react';

import { Size } from '../../models';
import styles from './index.module.scss';

interface Props {
  size: Size | number;
  imgUrl?: string;
  imgAlt?: string;
  shadow?: boolean;
}

export const BasicCard: FC<Props> = ({ imgUrl, imgAlt, size, shadow, children }) => {
  
  const getStyle = shadow === true ? styles.BasicCard__shadow : styles.BasicCard;
  
  return (
    <div className={ getStyle } style={{ width: size, height: size * 1.5 }}> 
      { imgUrl ? 
          <div className={styles.image}>
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