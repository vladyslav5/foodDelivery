import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import LoginForm from './LoginForm'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'


const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],
	args:{
		onSuccess: ()=>{}
	}

} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	decorators:[StoreDecorator({
		loginForm:{
			username:'123',
			password:'pass'
		}
	})],
	render: (args) => <LoginForm {...args}/>,
}
export const Dark: Story = {
	decorators:[StoreDecorator({
		loginForm:{
			username:'123',
			password:'pass'
		}
	}),
	ThemeDecorator(Theme.DARK)],
	render: (args) => <LoginForm {...args}/>,
}
export const WithErrorLight: Story = {
	decorators:[StoreDecorator({
		loginForm:{
			username:'123',
			password:'pass',
			error:'auth error'
		}
	})],
	render: (args) => <LoginForm {...args}/>,
}
export const WithErrorDark: Story = {
	decorators:[StoreDecorator({
		loginForm:{
			username:'123',
			password:'pass',
			error:'auth error'
		}
	}),
	ThemeDecorator(Theme.DARK)],
	render: (args) => <LoginForm {...args}/>,
}
export const LoadingLight: Story = {
	decorators:[StoreDecorator({
		loginForm:{
			username:'123',
			password:'pass',
			isLoading:true
		}
	})],
	render: (args) => <LoginForm {...args}/>,
}
export const LoadingDark: Story = {
	decorators:[StoreDecorator({
		loginForm:{
			username:'123',
			password:'pass',
			isLoading:true
		}
	}),
	ThemeDecorator(Theme.DARK)],
	render: (args) => <LoginForm {...args}/>,
}