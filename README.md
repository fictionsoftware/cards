# @draftcraft/cards

> Comprehensive React Cards library

[![NPM](https://img.shields.io/npm/v/@draftcraft/cards.svg)](https://www.npmjs.com/package/@draftcraft/cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Requires React > 16.8 for hooks support.

[Demo examples availabe here](https://www.draftcraft.co/cards)

## Install

With npm

```bash
npm install --save @draftcraft/cards
```

...or with yarn

```bash
yarn add @draftcraft/cards
```
## Styles

Add the `cards`  style to your project by importing the stylesheet:

```
import "@draftcraft/cards/dist/index.css";
```

## Usage

Given the nature of a card, the majority of features are predicated on a fixed width. Sizes of cards are calculated
as 1.5 times the height of the width for a desireable ratio. As such the `Size` enum is a property that might be passed
to many components. All components in this library can take a `className` and `style` 
prop to override any existing styles.

Possible values for the Size enum that is passed to the `size` prop in components:

| Enum Label  | Value |
|-------------|-------|
| Size.SMALL  | 100   |
| Size.MEDIUM | 200   |
| Size.LARGE  | 300   |
| Size.XLARGE | 400   |

You can also provide any numerical value to the size prop.

### Card

The basic card component comes with a few stylistic options that wrap the children
passed to it.

```tsx
import "@draftcraft/cards/dist/index.css";
import React, { Component } from 'react'

import { Card, Size } from '@draftcraft/cards';

export const Example = (props) => {
    return (
      <Card
        size={Size.Large}
        imgUrl={props.url}
        imgAlt={'Alternate Text'}
        shadow
        rounded
      >
        {props.content}
      </Card>
    );
}
```

| Props   | Type     | Required |
|---------|----------| -------- |
| size    | Number   | Yes      |
| imgUrl  | String   | No       |
| imgAlt  | String   | No       |
| shadow  | boolean  | No       |
| rounded | boolean  | No       |


### Flippable

`Flippable` is a component that can flip content from one side to the other. It takes children but only renders the first two children given to it. The first child will render on the front of the flippable content and the second child will render on the back. Any content can be passed to flippable as a child. Below is an example of a flippable `Card`.

```tsx
import "@draftcraft/cards/dist/index.css";
import React, { Component } from 'react'

import { Flippable, Card, Size } from '@draftcraft/cards';

export const Example = (props) => {
    return (
      <Flippable
        flipped={props.flipped}
        direction={RotationType.HORIZONTAL}
      >
        <Card
          size={Size.Large}
          imgUrl={props.url}
          imgAlt={'Alternate Text'}
          shadow
          rounded
        >
          {props.frontContent}
        </Card>
        <Card
          size={Size.Large}
          shadow
          rounded
        >
          {props.backContent}
        </Card>
      </Flippable>
    );
}
```

| Props   | Type     | Required |
|---------|----------| -------- |
| flipped    | boolean   | Yes      |
| direction  | RotationType, 'Vertical', or 'Horizontal'   | Yes      |

### Deck

The `Deck` component takes any children and stacks them on top of eachother
with the option to swipe them left or right. You can provide functions as props that
determine what might occur when a card is swiped left vs right.

```tsx
import "@draftcraft/cards/dist/index.css";
import React, { Component } from 'react'

import { Deck, Card, Size } from '@draftcraft/cards';

export const Example = (props) => {
    return (
      <Deck
        swipeable
        onSwipeLeft={props.swipeLeft}
        onSwipeRight={props.swipeRight}
      >
        <Card
          size={Size.Large}
          imgUrl={props.url}
          imgAlt={'Alternate Text'}
          shadow
          rounded
        >
          First Card
        </Card>
        <Card
          size={Size.Large}
          shadow
          rounded
        >
          Second Card
        </Card>
        <Card
          size={Size.Large}
          shadow
          rounded
        >
          Third Card
        </Card>
      </Deck>
    );
}
```

| Props   | Type     | Required |
|---------|----------| -------- |
| swipeable    | boolean   | No      |
| onSwipeLeft  | Function   | No       |
| onSwipeRight  | Function   | No       |

### Card Carousel

The `CardCarousel` component is used to swipe through a paginated list of cards 
(or any other children). It is responsive to page resizing and needs to determine
the width of each page and each child to determine how many children should be on
each page. As such, it takes two required props: `cardSize` and `spacing`. If 
inaccurate values are provided to these props the carousel will not be able to 
accurately calculate the number of children that should render on each page. The
implementation of the `CardCarousel` component uses another component, `PaginationDots`, which can be used separately for other implementations if you like.

```tsx
import "@draftcraft/cards/dist/index.css";
import React, { Component } from 'react'

import { CardCarousel, Card, Size } from '@draftcraft/cards';

export const Example = (props) => {
    return (
      <CardCarousel
        cardSize={Size.Large}
        spacing={10}
        showPagination
        showArrows
      >
        <Card
          size={Size.Large}
          imgUrl={props.url}
          imgAlt={'Alternate Text'}
          shadow
          rounded
        >
          First Card
        </Card>
        <Card
          size={Size.Large}
          shadow
          rounded
        >
          Second Card
        </Card>
        <Card
          size={Size.Large}
          shadow
          rounded
        >
          Third Card
        </Card>
      </CardCarousel>
    );
}
```

| Props   | Type     | Required |
|---------|----------| -------- |
| cardSize    | Number   | Yes      |
| spacing  | Number   | Yes      |
| showPagination  | boolean   | No       |
| showArrows  | boolean   | No       |

### Pagination Dots

```tsx
import "@draftcraft/cards/dist/index.css";
import React, { Component, useState } from 'react'

import { PaginationDots } from '@draftcraft/cards';

export const Example = (props) => {
  const [index, setIndex] = useState<number>(0);

  return (<PaginationDots
    numOfPages={props.numOfPages}
    currentPage={index}
    onPageSelect={setIndex}
  />);
};
```

| Props   | Type     | Required |
|---------|----------| -------- |
| numOfPages    | Number   | Yes      |
| currentPage  | Number   | Yes      |
| onPageSelect  | Function   | No       |


### Action
An `Action` in the cards design system is like a mini card that is used to
call attention to an action that may need to occur. This can be used like a button
or a bullet point in many cases and can be shaped as a circle (like a poker chip)
or a rectangle.

```tsx
import "@draftcraft/cards/dist/index.css";
import React, { Component } from 'react'

import { Action, Shape } from '@draftcraft/cards';

export const Example = (props) => {

  return (
    <Action
      shape={Shape.RECTANGLE}
      hoverable
      hoverColor={'rgba(255,75,75,.5)'}
    >
      { props.icon }
    </Action>
  );
};
```

| Props   | Type     | Required |
|---------|----------| -------- |
| shape    | Shape   | No      |
| hoverable  | boolean   | No      |
| hoverColor  | boolean   | No       |

### Action Details

The `ActionDetails` component simply wraps the `Action` component and provides
additional details to the right. It must be provided a `description` prop that will
display text next to the `Action` component and can optionally also be given a `title`.

```tsx
import "@draftcraft/cards/dist/index.css";
import React, { Component } from 'react'

import { ActionDetails, Shape } from '@draftcraft/cards';

export const Example = (props) => {

  return (
    <ActionDetails
      title={'Example Title'}
      description={'This is an Action Details component'}
      shape={Shape.RECTANGLE}
      hoverable
      hoverColor={'rgba(255,75,75,.5)'}
    >
      { props.icon }
    </ActionDetails>
  );
};
```

| Props   | Type     | Required |
|---------|----------| -------- |
| description    | String   | Yes      |
| title    | String   | No      |
| shape    | Shape   | No      |
| hoverable  | boolean   | No      |
| hoverColor  | boolean   | No       |

## License

MIT © [draftcraft](https://github.com/draftcraft) Park City Concepts, LLC dba Draftcraft
