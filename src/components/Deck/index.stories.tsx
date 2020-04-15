import * as React from 'react';

import { Deck } from '.';

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
  return (
    <Deck offsetRange={4}>
      {
        Array(5)
          .fill(null)
          .map((_, index) =>
            <div
              key={index}
              style={{ backgroundColor: colors[index], width: 300, height: 450}}
            >
              {`${Math.random()} Card number ${index}`}
            </div>
          )
      }
    </Deck>
  );
};