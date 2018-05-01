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
      children
    } = this.props

    let flexDirection = directionMap.get(direction)

    return (
      <div style={{
        display: 'flex',
        flexDirection
      }}>
        {children}
      </div>
    )
  }
}

export default Flex
