/**
*
* Flex
*
*/

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
/**
 * FlexItem is a simple container for when you want to render a child of Flex
 * It only contains a subset of flexbox properties (order, grow, shrink, alignSelf & basis)
 */
class FlexItem extends Component {
  static propTypes = {
    // direction: PropTypes.oneOf(['ltr', 'rtl', 'ttb', 'btt'])
  }

  static defaultProps = {
    // direction: 'ltr'
  }

  render () {
    let {
      children,
      style,
      ...props
    } = this.props

    return (
      <div {...props} style={{
        ...style
      }} >
        {children}
      </div>
    )
  }
}

export default FlexItem
