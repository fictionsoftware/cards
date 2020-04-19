import * as React from 'react';

import { Deck } from '.';
import { boolean } from "@storybook/addon-knobs";

export default {
  title: 'Deck',
  parameters: {
    info: { inline: true },
  },
};

const colors = ['#e3d3d3', '#ec1d26', '#e9e9d5', '#F4988A', '#99ccee'];
const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const _Deck = () => {
  const swipeRight = () => console.log('right');
  const swipeLeft = () => console.log('left');

  return (
    <Deck swipeable={boolean('Swipeable', true)} onSwipeLeft={swipeLeft} onSwipeRight={swipeRight}>
      {
        Array(5)
          .fill(null)
          .map((_, index) =>
            <div
              key={index}
              style={{ backgroundColor: colors[index], width: 300, height: 450, transform: `rotate(${randomRange(-1 * 4, 4)}deg)`}}
            >
              {`${Math.random()} Card number ${index}`}
            </div>
          )
      }
    </Deck>
  );
};