import React from 'react'
import { mount } from 'enzyme'

import Flex from './index'

describe('Flex', function () {
  it('should mount without throwing an error', () => {
    expect(mount(<Flex />).find('div')).toHaveLength(1)
  })
})
