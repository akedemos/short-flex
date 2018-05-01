# short-flex

A small and simple react Flexbox component

## Install

`npm i --save short-flex`

## Usage

```js
import Flex from 'short-flex'
import React from 'react'

const MyComponent = () => (
  <Flex>
    <div>left item</div>
    <div>right item</div>
  </Flex>
)
```

The `<Flex />` component takes props that match flexbox properties and assign shorthands to make layout easier to read.

Properties:

- direction (flex-direction):

  Possible values are:
  - 'ltr', 'rtl', 'ttb' and 'btt'
    Corresponds to left to right (row) right to left (row-reverse) tot to bottom (column) and bottom to top (column-reverse)

### Future tasks

Still to implement on `<Flex />`

- [ ] wrap (flex-wrap)
- [ ] justContent (justify-content)
- [ ] alignItems (align-items)
- [ ] alignContent (align-content)

- [ ] Deploy the storybook
- [ ] Allow custom tags (no need to always render a div)

- [ ] Create `<FlexItem>`
  This will be a div that has shorthands for the order, grow, shrink etc properties that appear on Flexbox items

- [ ] Maybe? Create a `<Row />` and `<Column />` shorthands