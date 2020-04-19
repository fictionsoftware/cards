import { EventData, Swipeable } from 'react-swipeable';
import React, { Children, FC, useState } from 'react';

import CSS from 'csstype';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
    swipeable?: boolean;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    style?: CSS.Properties;
    className?: string;
}

export const Deck: FC<Props> = ({ swipeable, onSwipeLeft, onSwipeRight, style, className, children }) => {
  const resolveClassName = clsx(styles.Deck, className !== undefined && className);
  const cards = Children.toArray(children);
  const [cardsState, setCardsState] = useState(Array(cards.length).fill(null));
  const resolveInnerClassName = (index: number) => 
    cardsState[index] === 'Right'
      ? styles.slideRight
      : cardsState[index] === 'Left'
      ? styles.slideLeft
      : undefined;

  const resolveInnerStyle = (index: number) => ({
      zIndex: index,
    });

  const handleSwipe = (e: EventData, index: number) => {
    const newState = cardsState.map((cardState, i) => i === index ? e.dir : cardState);
    setCardsState(newState);
    if (e.dir === 'Left') {
      if (onSwipeLeft !== undefined) onSwipeLeft();
    } 

    if (e.dir === 'Right') {
      if (onSwipeRight !== undefined) onSwipeRight();
    }
  };

  const renderContent = (card: any, index: number) => (
    <div style={resolveInnerStyle(index)} className={resolveInnerClassName(index)}>
      {card}
    </div>
  )

  return (
    <div className={ resolveClassName } style={{...style}}>
      {cards.map((card, index) => swipeable ? (
        <Swipeable
          trackMouse
          onSwiped={(e: EventData) => handleSwipe(e, index)}
          key={index}
        >
          {renderContent(card, index)}
        </Swipeable>
      ) : renderContent(card,index))}
    </div>
  );
};