import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],

} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: () => <MainPage />,
}
export const Dark: Story = {
	render: () => <MainPage/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}