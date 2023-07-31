import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/StyleDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Navbar} from './Navbar'


const meta = {
	title: 'widget/Navbar',
	component: Navbar,
	tags: ['autodocs'],

} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: (args) => <Navbar {...args}/>,
}
export const Dark: Story = {
	render: (args) => <Navbar {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}