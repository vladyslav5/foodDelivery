import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import AvatarImg from 'shared/assets/AvatarImg.jpg'


const meta = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	tags: ['autodocs'],
	decorators:[
		StoreDecorator({
			profile:{
				readonly:true,
				form:{
					avatar:AvatarImg,
					firstName:'Jo',
					lastName:'Doe',
					username:'Jo123'
				}
			}
		})
	]

} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: () => <ProfilePage />,
}
export const Dark: Story = {
	render: () => <ProfilePage/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}