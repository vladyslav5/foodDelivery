import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {PageLoader} from './PageLoader'

const meta = {
	title: 'widget/PageLoader',
	component: PageLoader,
	tags: ['autodocs'],

} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: (args) => <PageLoader {...args}/>,
}
export const Dark: Story = {
	render: (args) => <PageLoader {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}