// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Poster> = (args) => {
//   return <Poster {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import missing from './images/missing.jpg'
import { Poster } from './Poster'

export default {
  title: 'Components/Poster',
  component: Poster,
} as ComponentMeta<typeof Poster>

const Template = (args) => <Poster {...args} />

export const Primary = Template.bind({})
Primary.args = {
  src: missing,
  alt: 'Missing',
}

export const Large = Template.bind({})
Large.args = {
  src: missing,
  alt: 'Missing',
  size: 'large',
}

// make medium size the default like above
export const Medium = Template.bind({})
Medium.args = {
  src: missing,
  alt: 'Missing',
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  src: missing,
  alt: 'Missing',
  size: 'small',
}

export const WithHeadingAndSubheading = Template.bind({})
WithHeadingAndSubheading.args = {
  src: missing,
  alt: 'Missing',
  heading: 'Missing',
  subheading: 'Missing',
}
