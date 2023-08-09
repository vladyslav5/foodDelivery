import type {Meta, StoryObj} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Input, InputTheme} from 'shared/ui/Input/Input'


const meta = {
	title: 'shared/Input',
	component: Input,
	tags: ['autodocs'],
	args:{
		placeholder:'text'
	}

} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>;


export const Default:Story = {
	render: (args) => <Input {...args}/>,
}
export const DefaultDark:Story = {
	render: (args) => <Input {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
export const Primary: Story = {
	args:{
		theme:InputTheme.PRIMARY
	},
	render: (args) => <Input {...args}/>,
}

export const PrimaryDark: Story = {
	args:{
		theme:InputTheme.PRIMARY
	},
	render: (args) => <Input {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
