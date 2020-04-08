# @draftcraft/cards

> Comprehensive React Cards library

[![NPM](https://img.shields.io/npm/v/@draftcraft/cards.svg)](https://www.npmjs.com/package/@draftcraft/cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Requires React > 16.8 for hooks support.

## Install

With npm

```bash
npm install --save @draftcraft/cards
```

...or with yarn

```bash
yarn add @draftcraft/cards
```

## Usage

Given the nature of a card, the majority of features are predicated on a fixed width. Sizes of cards are calculated
as 1.5 times the height of the width for a desireable ratio. As such the `Size` enum is a property that will be passed
to many components.

```tsx
import React, { Component } from 'react'

import { BasicCard, Size } from '@draftcraft/cards';

export const Example = (props) => {
    return (
      <BasicCard size={Size.Large} />
    );
}
```

Possible values for the size enum that is passed to the size prop:

| Enum Label  | Value |
|-------------|-------|
| Size.SMALL  | 100   |
| Size.MEDIUM | 200   |
| Size.LARGE  | 300   |
| Size.XLARGE | 400   |

You can also provide any numerical value to the size prop.

## License

MIT © [draftcraft](https://github.com/draftcraft) Park City Concepts, LLC dba Draftcraft
