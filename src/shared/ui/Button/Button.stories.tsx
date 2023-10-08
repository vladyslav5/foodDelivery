import type {Meta, StoryObj} from '@storybook/react'
import Button, {ButtonTheme} from './Button'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
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
		theme:ButtonTheme.CLEAR
	},
	render: (args ) => <Button {...args}/>,

}
export const ClearDark: Story = {
	args:{
		theme:ButtonTheme.CLEAR
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const Outlined: Story = {
	args:{
		theme:ButtonTheme.OUTLINE
	},
	render: (args ) => <Button {...args}/>,
}
export const OutlinedDark: Story = {
	args:{
		theme:ButtonTheme.OUTLINE
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const Background: Story = {
	args:{
		theme:ButtonTheme.BACKGROUND
	},
	render: (args ) => <Button {...args}/>,
}

export const BackgroundDark: Story = {
	args:{
		theme:ButtonTheme.BACKGROUND
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}


export const BackgroundInverted: Story = {
	args:{
		theme:ButtonTheme.BACKGROUND_INVERTED
	},
	render: (args ) => <Button {...args}/>,
}

export const BackgroundInvertedDark: Story = {
	args:{
		theme:ButtonTheme.BACKGROUND_INVERTED
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const Square: Story = {
	args:{
		square:true,
		children:'<'
	},
	render: (args ) => <Button {...args}/>,
}

export const SquareDark: Story = {
	args:{
		square:true,
		children:'<'
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const Disabled: Story = {
	args:{
		disabled:true
	},
	render: (args ) => <Button {...args}/>,
}

export const DisabledDark: Story = {
	args:{
		disabled:true
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}

export const OutlinedDashed: Story = {
	args:{
		theme:ButtonTheme.OUTLINE_DASHED
	},
	render: (args ) => <Button {...args}/>,
}
export const OutlinedDashedDark: Story = {
	args:{
		theme:ButtonTheme.OUTLINE_DASHED
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}

export const Rounded: Story = {
	args:{
		rounded:true,
		children:'<'
	},
	render: (args ) => <Button {...args}/>,
}
export const RoundedDark: Story = {
	args:{
		rounded:true,
		children:'<'
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]

}
export const Hover: Story = {
	args:{
		hover:true,
		children:'<'
	},
	render: (args ) => <Button {...args}/>,
}
export const HoverDark: Story = {
	args:{
		hover:true,
		children:'<'
	},
	render: (args ) => <Button {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]

}