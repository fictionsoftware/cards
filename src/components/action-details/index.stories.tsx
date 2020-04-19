import * as React from 'react';

import { ActionDetails } from '.';

export default {
  title: 'ActionDetails',
  parameters: {
    info: { inline: true },
  },
};

export const _ActionDetails = () => (
  <ActionDetails
    hoverable
    style={{ width: '100px', height: '100px' }}
    title={'Hero Text'}
    description={'A lot more detailed information should be displayed here.'}
  >
    H
  </ActionDetails>
);