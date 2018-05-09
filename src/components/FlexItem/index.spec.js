import React from 'react'
import { mount } from 'enzyme'

import FlexItem from './index'

describe('FlexItem', function () {
  it('should mount without throwing an error', () => {
    expect(mount(<FlexItem />).find('div')).toHaveLength(1)
  })
})
