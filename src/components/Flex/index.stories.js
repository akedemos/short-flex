import React from 'react'
import { storiesOf } from '@storybook/react'

import Flex from './index'
import FlexItem from '../FlexItem'

const Item = (color = 'red', height = 200, width = 200) => (
  <div style={{
    backgroundColor: color,
    textAlign: 'center',
    width,
    minHeight: height,
    margin: 5
  }}> {width} x {height} (Variable height)</div>
)

const FixedHeightItem = (color = 'red', height = 200, width = 200) => (
  <div style={{
    backgroundColor: color,
    textAlign: 'center',
    width,
    height,
    margin: 5
  }}> {width} x {height} (Fixed height)</div>
)

const items = [
  Item(),
  Item('aqua', 200, 100),
  Item(),
  FixedHeightItem('darkkhaki', 100, 100),
  Item('hotpink'),
  Item('orchid', 100, 150),
  Item('slateblue'),
  Item('olive')
]

storiesOf('Flex', module)

  .add('With default props', () => (
    <Flex>{items}</Flex>
  ))
  .add('With direction: ltr (Left to Right)', () => (
    <Flex direction='ltr'>{items}</Flex>
  ))
  .add('With direction: rtl (Right to Left)', () => (
    <Flex direction='rtl'>{items} </Flex>
  ))
  .add('With direction: ttb (Top to Bottom)', () => (
    <Flex direction='ttb'>{items}</Flex>
  ))
  .add('With direction: btt (Bottom to Top)', () => (
    <Flex direction='btt'>{items}</Flex>
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
  .add(`With alignItems: 'start'`, () => (
    <Flex alignItems='start'>{items}</Flex>
  ))
  .add(`With alignItems: 'end'`, () => (
    <Flex alignItems='end'>{items}</Flex>
  ))
  .add(`With alignItems: 'center'`, () => (
    <Flex alignItems='center'>{items}</Flex>
  ))
  .add(`With alignItems: 'baseline'`, () => (
    <Flex alignItems='baseline'>{items}</Flex>
  ))
  .add(`With alignItems: 'stretch'`, () => (
    <Flex alignItems='stretch'>{items}</Flex>
  ))
  .add(`With alignContent: 'start'`, () => (
    <Flex style={{ height: 500 }} wrap alignContent='start'>{items}</Flex>
  ))
  .add(`With alignContent: 'end'`, () => (
    <Flex style={{ height: 500 }} wrap alignContent='end'>{items}</Flex>
  ))
  .add(`With alignContent: 'center'`, () => (
    <Flex style={{ height: 500 }} wrap alignContent='center'>{items}</Flex>
  ))
  .add(`With alignContent: 'between'`, () => (
    <Flex style={{ height: 500 }} wrap alignContent='between'>{items}</Flex>
  ))
  .add(`With alignContent: 'around'`, () => (
    <Flex style={{ height: 500 }} wrap alignContent='around'>{items}</Flex>
  ))
  .add(`With center={true} prop`, () => (
    <Flex style={{ height: 500, width: 500, backgroundColor: 'aqua' }} center>{items[3]}</Flex>
  ))
  .add(`Using the fullWidth prop`, () => (
    <Flex style={{ height: 80, width: 600, backgroundColor: 'aqua', padding: '0 20px' }} alignItems='center'>
      <FlexItem style={{ backgroundColor: 'orange' }}>Left item</FlexItem>
      <FlexItem grow style={{ backgroundColor: 'pink' }}>Middle item (grows)</FlexItem>
      <FlexItem style={{ backgroundColor: 'purple' }}>Right item</FlexItem>
    </Flex>
  ))
