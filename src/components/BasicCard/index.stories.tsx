import * as React from 'react';

import { boolean, number, withKnobs } from "@storybook/addon-knobs";

import { BasicCard } from '.';

export default {
  title: 'BasicCard',
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs]
};

export const _BasicCard = () => (
  <BasicCard
    shadow={boolean('shadow', false)}
    size={number('size', 350)}
    imgUrl={'https://www.udemy.com/blog/wp-content/uploads/2014/05/shutterstock_1076588481.jpg'}
  >
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
  </BasicCard>
);