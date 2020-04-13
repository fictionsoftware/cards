import React, {
  FC,
  useEffect,
  useState
} from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaginationDots } from '../pagination-dots';
import { Size } from '../../models';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  cardSize: Size | number;
  spacing: number;
  showPagination?: boolean;
  showArrows?: boolean;
  style?: CSS.Properties;
  className?: string;
}

export const CardCarousel: FC<Props> = ({
  cardSize,
  spacing,
  showPagination,
  showArrows,
  style,
  className,
  children
}) => {
  const { toArray } = React.Children;
  const [index, setIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const resolveClassName = clsx(styles.CardCarousel, className !== undefined && className);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setIndex(0);
    setWidth(window.innerWidth);
  }

  const componentsPerPage = (Math.floor(width / (cardSize + spacing)));
  const numOfPages = (Math.ceil(toArray(children).length / componentsPerPage));

  const renderSections = () =>
    Array(numOfPages).fill(null)
      .map((_, index) =>
      <div key={`page-${index}`} className={styles.content}>
        {
          toArray(children).filter(
            (__, i) =>
              i >= index * componentsPerPage &&
              i < index * componentsPerPage + componentsPerPage
          )
        }
      </div>);

  return (
    <div className={ resolveClassName } style={{...style}}>
      <div className={styles.container}>
        { 
          showArrows !== false && index > 0 ?
            <div className={styles.chevron} onClick={() => setIndex(index - 1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          : null
        }
        <SwipeableViews
          index={index}
          onChangeIndex={setIndex}
          enableMouseEvents
        >
          {renderSections()}
        </SwipeableViews>
        { 
          showArrows !== false && index < numOfPages - 1 ?
            <div className={styles.chevron} onClick={() => setIndex(index + 1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          : null
        }
      </div>
      {
        showPagination !== false
        ? (<div className={styles.pagination}>
            <PaginationDots
              numOfPages={numOfPages}
              currentPage={index}
              onPageSelect={setIndex}
            />
          </div>)
        : null
      }
    </div>
  );
};