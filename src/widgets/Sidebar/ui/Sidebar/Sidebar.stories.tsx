import {Meta, StoryObj} from '@storybook/react'
import {Sidebar} from './Sidebar'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],

} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: (args) => <Sidebar {...args}/>,
}
export const Dark: Story = {
	render: (args) => <Sidebar {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}