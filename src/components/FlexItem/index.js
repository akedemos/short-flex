import React, { Component } from 'react'
import PropTypes from 'prop-types'
/**
 * FlexItem is a simple container for when you want to render a child of Flex
 * It only contains a subset of flexbox properties (order, grow, shrink, alignSelf & basis)
 */
class FlexItem extends Component {
  static propTypes = {
    grow: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
  }

  static defaultProps = {
    // direction: 'ltr'
  }

  render () {
    let {
      grow,
      children,
      style,
      ...props
    } = this.props

    if (typeof grow === 'boolean') {
      grow = Number(grow)
    }

    return (
      <div {...props} style={{
        flexGrow: grow,
        ...style
      }} >
        {children}
      </div>
    )
  }
}

export default FlexItem
