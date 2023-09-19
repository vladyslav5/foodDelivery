import type {Meta, StoryObj} from '@storybook/react'
import {ProfileCard} from './ProfileCard'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ValidateProfileError} from 'entities/Profile'
import AvatarImg from 'shared/assets/AvatarImg.jpg'


const meta = {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	tags: ['autodocs'],
	decorators:[StoreDecorator({
		profile:{
			data:{
				avatar:AvatarImg,
				firstName:'Jo',
				lastName:'Doe',
				username:'Jo123'
			},
			error:undefined
		}
	})],
	args:{
	}

} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>;


export const Default: Story = {
	args:{
		readonly:true
	},
	render: (args) => <ProfileCard {...args}/>,
}

export const DefaultDark: Story = {
	args:{
		readonly:true
	},
	decorators:[ThemeDecorator(Theme.DARK)],
	render: (args) => <ProfileCard {...args}/>,
}

export const Edit: Story = {
	args:{
		readonly:false
	},
	render: (args) => <ProfileCard {...args}/>,
}
export const isLoading: Story = {
	args:{
		isLoading:true,
	},
	render: (args) => <ProfileCard {...args}/>,
}
export const fetchError: Story = {
	args:{
		fetchError:'error fetch'
	},
	render: (args) => <ProfileCard {...args}/>,
}
export const validateErrors: Story = {
	args:{
		validateErrors:[
			ValidateProfileError.SERVER_ERROR,
			ValidateProfileError.INCORRENCT_USER_DATA,
			ValidateProfileError.INCORRENCT_USER_AVATAR_IMAGE,
			ValidateProfileError.NOT_DATA
		]
	},
	render: (args) => <ProfileCard {...args}/>,
}


export const EditDark: Story = {
	args:{
		readonly:false
	},
	decorators:[ThemeDecorator(Theme.DARK)],
	render: (args) => <ProfileCard {...args}/>,
}
export const isLoadingDark: Story = {
	args:{
		isLoading:true,
	},
	decorators:[ThemeDecorator(Theme.DARK)],
	render: (args) => <ProfileCard {...args}/>,
}
export const fetchErrorDark: Story = {
	args:{
		fetchError:'error fetch'
	},
	decorators:[ThemeDecorator(Theme.DARK)],
	render: (args) => <ProfileCard {...args}/>,
}
export const validateErrorsDark: Story = {
	args:{
		validateErrors:[
			ValidateProfileError.SERVER_ERROR,
			ValidateProfileError.INCORRENCT_USER_DATA,
			ValidateProfileError.INCORRENCT_USER_AVATAR_IMAGE,
			ValidateProfileError.NOT_DATA
		]
	},
	decorators:[ThemeDecorator(Theme.DARK)],
	render: (args) => <ProfileCard {...args}/>,
}
