import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Text, TextTheme} from './Text'


const meta = {
	title: 'shared/Text',
	component: Text,
	tags: ['autodocs'],
	args:{
		title:'title',
		text:'text text text text'
	}

} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>;


export const PrimaryLight: Story = {
	render: (args) => <Text {...args}/>,
}
export const PrimaryDark: Story = {
	render: (args) => <Text {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
export const ErrorLight: Story = {
	args:{
		theme:TextTheme.ERROR,
		title:'Error',
		text:'code 403'
	},
	render: (args) => <Text {...args}/>,
}
export const ErrorDark: Story = {
	args:{
		theme:TextTheme.ERROR,
		title:'Error',
		text:'code 403'
	},
	render: (args) => <Text {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
export const SecondaryLight: Story = {
	args:{
		theme:TextTheme.SECONDARY,
	},
	render: (args) => <Text {...args}/>,
}
export const SecondaryDark: Story = {
	args:{
		theme:TextTheme.SECONDARY,
	},
	render: (args) => <Text {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}