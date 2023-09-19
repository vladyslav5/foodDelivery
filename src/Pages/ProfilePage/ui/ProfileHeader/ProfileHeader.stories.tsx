import type {Meta, StoryObj} from '@storybook/react'
import {ProfileHeader} from './ProfileHeader'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'



const meta = {
	title: 'entities/ProfileHeader',
	component: ProfileHeader,
	tags: ['autodocs'],
	decorators:[StoreDecorator({
		profile:{
			readonly:false
		}
	})],
	args:{}

} satisfies Meta<typeof ProfileHeader>

export default meta

type Story = StoryObj<typeof meta>;


export const Default: Story = {
	render: (args) => <ProfileHeader {...args}/>,
}

