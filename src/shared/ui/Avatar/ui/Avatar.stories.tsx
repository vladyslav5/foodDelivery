import type {Meta, StoryObj} from '@storybook/react'
import {Avatar} from './Avatar'
import AvatarImg from 'shared/assets/AvatarImg.jpg'



const meta = {
	title: 'shared/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	args:{
		alt:'alt',
		src:AvatarImg
	}

} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>;


export const Default: Story = {
	render: (args) => <Avatar {...args}/>,
}
