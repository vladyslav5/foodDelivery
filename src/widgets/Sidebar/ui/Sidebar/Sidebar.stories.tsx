import {Meta, StoryObj} from '@storybook/react'
import {Sidebar} from './Sidebar'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
	decorators:[StoreDecorator({user:{
		authData:{username:'',id:3}
	}})]

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