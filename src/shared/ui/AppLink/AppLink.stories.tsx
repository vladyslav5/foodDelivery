import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/StyleDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {AppLink, AppLinkTheme} from './AppLink'



const meta = {
	title: 'shared/ApiLink',
	component: AppLink,
	tags: ['autodocs'],
	args:{
		children:'Link',
		to:'/'
	}

} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
	args:{
		theme:AppLinkTheme.PRIMARY
	},
	render: (args) => <AppLink {...args}/>,
}
export const PrimaryDark: Story = {
	args:{
		theme:AppLinkTheme.PRIMARY
	},
	render: (args) => <AppLink {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
export const Secondary: Story = {
	args:{
		theme:AppLinkTheme.SECONDARY
	},
	render: (args) => <AppLink {...args}/>,
}
export const SecondaryDark: Story = {
	args:{
		theme:AppLinkTheme.SECONDARY
	},
	render: (args) => <AppLink {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
