import React from 'react'
import { storiesOf } from '@storybook/react'

import Flex from './index'

const Item = (color = 'red', height = 50, width = 50) => (
  <div style={{
    backgroundColor: color,
    width,
    height,
    margin: 5
  }}>
    {width}px x {height}px
  </div>
)

const items = [
  Item(),
  Item(),
  Item('aqua'),
  Item()
]

storiesOf('Flex', module)
  .add('With default props', () => (
    <Flex>
      {items}
    </Flex>
  ))
  .add('With direction: ltr (Left to Right)', () => (
    <Flex direction='ltr'>
      {items}
    </Flex>
  ))
  .add('With direction: rtl (Right to Left)', () => (
    <Flex direction='rtl'>
      {items}
    </Flex>
  ))
  .add('With direction: ttb (Top to Bottom)', () => (
    <Flex direction='ttb'>
      {items}
    </Flex>
  ))
  .add('With direction: btt (Bottom to Top)', () => (
    <Flex direction='btt'>
      {items}
    </Flex>
  ))
