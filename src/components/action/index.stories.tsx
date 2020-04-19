import * as React from 'react';

import { Action } from '.';
import { Shape } from '../../models';

export default {
  title: 'Action',
  parameters: {
    info: { inline: true },
  },
};

export const _ActionRect = () => (
  <Action
    hoverable
    style={ { width: '100px', height: '100px' } }
  >
    Test Action
  </Action>
);

export const _ActionCirc = () => (
  <Action
    shape={Shape.CIRCLE}
    hoverable
    hoverColor={'rgba(0,255,0,.5)'}
    style={ { width: '100px', height: '100px' } }
  >
    Test Action
  </Action>
);