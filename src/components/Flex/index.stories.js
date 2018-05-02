import React from 'react'
import { storiesOf } from '@storybook/react'

import Flex from './index'

const Item = (color = 'red', height = 100, width = 100) => (
  <div style={{
    backgroundColor: color,
    width,
    height,
    margin: 5
  }} />
)

const items = [
  Item(),
  Item(),
  Item('aqua'),
  Item(),
  Item('darkkhaki', 50, 50),
  Item('hotpink'),
  Item(),
  Item(),
  Item('orchid', 75, 75),
  Item(),
  Item(),
  Item('slateblue'),
  Item('olive')
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
  .add('With wrap: true', () => (
    <Flex wrap>{items}</Flex>
  ))
  .add('With wrap: false', () => (
    <Flex wrap={false}>{items}</Flex>
  ))
  .add(`With wrap: 'reverse'`, () => (
    <Flex wrap='reverse'>{items}</Flex>
  ))
  .add(`With justify: 'start'`, () => (
    <Flex justify='start'>{items.slice(0, 4)}</Flex>
  ))
  .add(`With justify: 'end'`, () => (
    <Flex justify='end'>{items.slice(0, 4)}</Flex>
  ))
  .add(`With justify: 'center'`, () => (
    <Flex justify='center'>{items.slice(0, 4)}</Flex>
  ))
  .add(`With justify: 'between'`, () => (
    <Flex justify='between'>{items.slice(0, 4)}</Flex>
  ))
  .add(`With justify: 'around'`, () => (
    <Flex justify='around'>{items.slice(0, 4)}</Flex>
  ))
