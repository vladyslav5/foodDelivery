import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Navbar} from './Navbar'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'


const meta = {
	title: 'widget/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})]

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
export const AuthLight: Story = {
	render: (args) => <Navbar {...args}/>,
	decorators: [StoreDecorator(
		{
			user: {
				authData: {username:'',id:1}
			}
		}
	)]
}
export const AuthDark: Story = {
	render: (args) => <Navbar {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(
		{
			user: {
				authData: {username:'',id:1}
			}
		}
	)]
}