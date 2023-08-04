import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Modal} from 'shared/ui/Modal/Modal'


const meta = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
	args:{
		isOpen:true,
		children:'modal'
	}

} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: (args) => <Modal {...args}/>,
}
export const Dark: Story = {
	render: (args) => <Modal {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}