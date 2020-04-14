import * as React from 'react';

import { Deck } from '.';
import { useDrag } from 'react-use-gesture';

export default {
  title: 'Deck',
  parameters: {
    info: { inline: true },
  },
};

const colors = ['#e3d3d3', '#ec1d26', '#e9e9d5', 'fff096', '#99ccee'];
const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const _Deck = () => {
  const bind = useDrag(console.log);

  return (
    <Deck>
      {
        Array(5)
          .fill(null)
          .map((_, index) =>
            <div 
              key={index}
              {...bind()}
              style={{ transform: `rotate(${randomRange(-4, 4)}deg)`, backgroundColor: colors[index], width: 300, height: 450, opacity: 1 }}
            >
              {`${Math.random()} Card number ${index}`}
            </div>
          )
      }
    </Deck>
  );
};