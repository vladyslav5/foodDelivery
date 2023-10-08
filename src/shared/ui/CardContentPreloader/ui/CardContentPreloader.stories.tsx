import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {CardContentPreloader} from './CardContentPreloader'


const meta = {
	title: 'shared/CardContentPreloader',
	component: CardContentPreloader,
	tags: ['autodocs'],


} satisfies Meta<typeof CardContentPreloader>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: () => <CardContentPreloader />,
}
export const Dark: Story = {
	render: () => <CardContentPreloader/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}