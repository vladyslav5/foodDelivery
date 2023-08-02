import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {PageError} from './PageError'



const meta = {
	title: 'widget/PageError',
	component: PageError,
	tags: ['autodocs'],

} satisfies Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: () => <PageError/>,
}
export const Dark: Story = {
	render: (args) => <PageError {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}