import * as React from 'react';

import { boolean, number, select, withKnobs } from "@storybook/addon-knobs";

import { Card } from '../Card';
import { Flippable } from '.';
import { RotationType } from '../../models/enums/rotation-type';

export default {
  title: 'Flippable',
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs]
};


const options = {
  Horizontal: RotationType.HORIZONTAL,
  Vertical: RotationType.VERTICAL,
};
const defaultValue = RotationType.HORIZONTAL;
const groupId = 'Rotation-Type';

export const FlippableCard = () => (
  <div style={{ width: 200}}>
  <Flippable
    flipped={boolean("Flipped", false, groupId)}
    direction={select('Rotate Direction', options, defaultValue, groupId)}
  >
    <div style={ {backgroundColor: '#99ccee', width: 75, height: 75 } }>Front Side Example</div>
    <div style={ {backgroundColor: '#ddaa55', width: 50, height: 50 } }>Back Side Example</div>
  </Flippable>
  </div>
);

export const FlippableWithBasicCard = () => (
  <Flippable
    flipped={boolean("Flipped", false, groupId)}
    direction={select('Rotate Direction', options, defaultValue, groupId)}
  >
    <Card
      rounded
      shadow={boolean('shadow', true)}
      size={number('size', 200)}
    >
      Front Side of Card
      <br />
      1
      <br />
      2
      <br />
      3
      <br />
      4
      <br />
      5
      <br />
      6
      <br />
      7
      <br />
      8
      <br />
      9
      <br />
      10
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      ...
    </Card>
    <Card
      rounded
      shadow={boolean('shadow', true)}
      size={number('size', 200)}
      imgUrl={'https://www.udemy.com/blog/wp-content/uploads/2014/05/shutterstock_1076588481.jpg'}
    >
      Back Side of Card
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      ...
    </Card>
  </Flippable>
);