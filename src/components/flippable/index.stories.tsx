import * as React from 'react';

import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { Flippable } from '.';
import { RotationType } from '../../models/enums/rotation-type';

export default {
  title: 'Components',
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
  <Flippable
    flipped={boolean("Flipped", false, groupId)}
    direction={select('Rotate Direction', options, defaultValue, groupId)}
  >
    <div style={ {backgroundColor: '#99ccee', width: 75, height: 75 } }>Front Side Example</div>
    <div style={ {backgroundColor: '#ddaa55', width: 50, height: 50 } }>Back Side Example</div>
  </Flippable>
);