import React, {
  FC,
  useEffect,
  useState
} from 'react';

// import { PaginationDots } from '../pagination-dots';
import { Size } from '../../models';
import SwipeableViews from 'react-swipeable-views';
import styles from './index.module.scss';

interface Props {
  cardSize: Size | number;
  spacing: number;
}

export const CardCarousel: FC<Props> = ({ cardSize, spacing, children }) => {
  const { toArray } = React.Children;
  const [index, setIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(window.innerWidth);

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
    <div className={ styles.CardCarousel }>
      { /* Add Left Arrow */ }
      <SwipeableViews
        index={index}
        onChangeIndex={setIndex}
        enableMouseEvents
      >
        {renderSections()}
      </SwipeableViews>
      { /* Add Right Arrow */ }
      { /* Add Pagination Dots */ }
    </div>
  );
};