/**
*
* Flex
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

const directionMap = new Map()
directionMap.set('ltr', 'row')
directionMap.set('rtl', 'row-reverse')
directionMap.set('ttb', 'column')
directionMap.set('btt', 'column-reverse')

const wrapMap = new Map()
wrapMap.set(true, 'wrap')
wrapMap.set(false, 'nowrap')
wrapMap.set('reverse', 'wrap-reverse')

const justifyMap = new Map()
justifyMap.set('start', 'flex-start')
justifyMap.set('end', 'flex-end')
justifyMap.set('center', 'center')
justifyMap.set('between', 'space-between')
justifyMap.set('around', 'space-around')

const alignItemsMap = new Map()
alignItemsMap.set('start', 'flex-start')
alignItemsMap.set('end', 'flex-end')
alignItemsMap.set('center', 'center')
alignItemsMap.set('baseline', 'baseline')
alignItemsMap.set('stretch', 'stretch')

class Flex extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['ltr', 'rtl', 'ttb', 'btt'])
  }

  static defaultProps = {
    direction: 'ltr'
  }

  render () {
    let {
      direction,
      wrap,
      justify,
      alignItems,
      children
    } = this.props

    let flexDirection = directionMap.get(direction) || 'initial'
    let flexWrap = wrapMap.get(wrap) || 'initial'
    let justifyContent = justifyMap.get(justify) || 'initial'
    alignItems = alignItemsMap.get(alignItems) || ''

    return (
      <div style={{
        display: 'flex',
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems
      }}>
        {children}
      </div>
    )
  }
}

export default Flex
