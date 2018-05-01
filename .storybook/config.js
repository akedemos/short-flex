import { configure } from '@storybook/react'

function loadStories() {
  require('../src/components/Flex/index.stories')
}

configure(loadStories, module)