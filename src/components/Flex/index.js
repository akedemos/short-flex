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

class Flex extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['ltr', 'rtl', 'ttb', 'btt'])
  }

  static defaultProps = {
    direction: 'ltr'
  }

  render () {
    const {
      direction,
      wrap,
      children
    } = this.props

    let flexDirection = directionMap.get(direction) || 'initial'
    let flexWrap = wrapMap.get(wrap) || 'initial'

    return (
      <div style={{
        display: 'flex',
        flexDirection,
        flexWrap
      }}>
        {children}
      </div>
    )
  }
}

export default Flex
