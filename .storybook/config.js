import { configure } from '@storybook/react'

function loadStories() {
  require('../src/components/Flex/index.stories')
  require('../src/components/FlexItem/index.stories')
}

configure(loadStories, module)