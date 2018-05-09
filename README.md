# short-flex

A small and simple react Flexbox component

## Install

`npm i --save short-flex`

## Usage

```js
import Flex from 'short-flex'
import React from 'react'

const MyComponent = () => (
  <Flex alignItems='center'>
    <div>Left item</div>
    <FlexItem grow={3}>Middle Item (grows)</FlexItem>
    <div>Right item</div>
  </Flex>
)
```

### Flex

The `<Flex />` component takes props that match flexbox properties and assign shorthands to make layout easier to read.

Storybook:

The easiest way to get started with this repo is to clone it and run  `npm install` then `npm storybook`. The storybook should give you and idea of how each of the props work and can be found at localhost:9001.

Properties:

- direction (flex-direction):

  Possible values are:
  - 'ltr', 'rtl', 'ttb' and 'btt'
    Corresponds to left to right (row) right to left (row-reverse) tot to bottom (column) and bottom to top (column-reverse)

- wrap (flex-wrap):

  Possible values are:
  - true, false, 'reverse'
    Corresponds to wrap, nowrap and wrap-reverse properties

- justify (justify-content):

  Possible values are:
  - 'start', 'end', 'center', 'between', 'around'
    Corresponds to flex-start, flex-end, center, space-between, space-around

- justify (justify-content):

  Possible values are:
  - 'start', 'end', 'center', 'between', 'around'
    Corresponds to flex-start, flex-end, center, space-between, space-around

- fullWidth
  When true this will set the style `width: 100%`. 

### FlexItem

The `<FlexItem />` component takes a subset of the flexbox props and renders a div with the `display: block;` css property by default.

Properties:

- order (order): TODO

  An integer to represent the flexbox item's order

- alignSelf (align-self): TODO

  Possible values are 'auto', 'start', 'end', 'baseline' & 'stretch'. Corresponds to auto, flex-start, flex-end, baseline and stretch

- grow (flex-grow): TODO (stories)

  Possible values are: true, false and any positive integer. Note that true will set `flex-grow: 1` and false `flex-grow: 0`

- shrink (flex-shrink): TODO

  Possible values are true, false and any positive integer. Note that true will set `flex-shrink: 1` and false `flex-shrink: 0`

- basis (flex-basis): TODO

  Possible values integer or string. Will convert an integer value to a px value

### Future tasks

Still to implement on `<Flex />`

- [x] wrap (flex-wrap)
- [x] justify (justify-content)
- [x] alignItems (align-items)
- [x] alignContent (align-content)

- [X] center shorthand (auto center an item)
- [ ] Improve stories by mixing variable height/width items for Flex stories
- [ ] Add a border to the story containers to make it even clearer what dimensions are being used
- [ ] flex-flow?
- [ ] Add notes addon for storybook and make note of useful flex attributes (i.e. alignContent needs a fixed height div and wrap=true to work, how center shorthand works etc)
- [ ] Add storyshots addon. Create snapshots from the stories and make sure all updates conform.
- [ ] Add info addon for storybook?
- [ ] Add CI/CD
- [ ] Deploy the storybook
- [ ] Allow custom tags (no need to always render a div)

- [ ] Create `<FlexItem>`
  This will be a div that has shorthands for the order, grow, shrink etc properties that appear on Flexbox items

- [ ] Maybe? Create a `<Row />` and `<Column />` shorthands
- [x] Improve stories alignItems (stretch is not very clear)