import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/StyleDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {SliderButton} from './SliderButton'




const meta = {
	title: 'shared/SliderButton',
	component: SliderButton,
	tags: ['autodocs'],

} satisfies Meta<typeof SliderButton>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: (args) =>  <SliderButton {...args}/>
}
export const Dark: Story = {
	render: (args) => <SliderButton {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
