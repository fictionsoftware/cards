import { Card, Flippable } from '../..';
import React, { useState } from 'react';
import { RotationType, Size } from '../../models';

import { CardCarousel } from '.';

export default {
  title: 'CardCarousel',
  parameters: {
    info: { inline: true },
  },
};

export const _CardCarousel = () => {
  const [flipped, setFlipped] = useState<boolean[]>([false, false, false, false, false]);
  const _setFlipped = (index: number) => {
    const flipCopy = [...flipped];
    flipCopy[index] = !flipCopy[index];
    setFlipped(flipCopy);
  }

  const colors = ['#99ccee', '#ddaa55', '#ec1d26', '#e9e9d5', 'fff096'];

  return (
  <CardCarousel 
    cardSize={Size.LARGE}
    spacing={10}
  >
    {
      Array(15).fill(null).map((_, index) => {
        return (
          <Flippable flipped={flipped[index % 5]} direction={RotationType.HORIZONTAL} key={index}>
            <Card size={Size.LARGE} shadow style={{ margin: '10px'}}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  backgroundColor: colors[index % 5]
                }}
                onClick={() => _setFlipped(index % 5)}
              >
                Hello World
              </div>
            </Card>
            <Card size={Size.LARGE} shadow style={{ margin: '10px'}}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  backgroundColor: colors[index % 5]
                }}
                onClick={() => _setFlipped(index % 5)}
              >
                The Back side
              </div>
            </Card>
          </Flippable>
        )
      })
    }
  </CardCarousel>
)};