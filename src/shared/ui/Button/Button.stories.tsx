import type {Meta, StoryObj} from '@storybook/react'
import Button, {ThemeButton} from './Button'
import {ThemeDecorator} from 'shared/config/storybook/StyleDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'




const meta = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
	args:{
		children:'text'
	}

} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
	render: (args) => <Button {...args}/>,
}

export const PrimaryDark: Story = {
	render: (args) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}

export const Clear: Story = {
	args:{
		theme:ThemeButton.CLEAR
	},
	render: (args ) => <Button {...args}/>,

}
export const ClearDark: Story = {
	args:{
		theme:ThemeButton.CLEAR
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const Outlined: Story = {
	args:{
		theme:ThemeButton.OUTLINE
	},
	render: (args ) => <Button {...args}/>,
}
export const OutlinedDark: Story = {
	args:{
		theme:ThemeButton.OUTLINE
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}



