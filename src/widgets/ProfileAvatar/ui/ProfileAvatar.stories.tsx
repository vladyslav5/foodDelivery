import type {Meta, StoryObj} from '@storybook/react'
import {ProfileAvatar} from './ProfileAvatar'
import AvatarImg from 'shared/assets/AvatarImg.jpg'




const meta = {
	title: 'widget/ProfileAvatar',
	component: ProfileAvatar,
	tags: ['autodocs'],
	args:{
		alt:'alt',
		readonly:false,
		src:AvatarImg
	}

} satisfies Meta<typeof ProfileAvatar>

export default meta

type Story = StoryObj<typeof meta>;


export const Default: Story = {
	render: (args) => <ProfileAvatar {...args}/>,
}
