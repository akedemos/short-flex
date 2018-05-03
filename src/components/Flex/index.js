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
    direction: PropTypes.oneOf(['ltr', 'rtl', 'ttb', 'btt']),
    wrap: PropTypes.oneOf([true, false, 'reverse']),
    justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
    alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around'])
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
      alignContent,
      center,
      children,
      style,
      ...props
    } = this.props

    if (center === true) {
      justify = 'center'
      alignItems = 'center'
    }

    let flexDirection = directionMap.get(direction)
    let flexWrap = wrapMap.get(wrap)
    let justifyContent = justifyMap.get(justify)
    alignItems = alignItemsMap.get(alignItems)
    alignContent = justifyMap.get(alignContent)

    return (
      <div {...props} style={{
        display: 'flex',
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        ...style
      }} >
        {children}
      </div>
    )
  }
}

export default Flex
