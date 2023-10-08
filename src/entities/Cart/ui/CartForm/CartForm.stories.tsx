import type {Meta, StoryObj} from '@storybook/react'
import CartForm from './CartForm'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
// @ts-ignore
import ProductMock from 'shared/assets/ProductMock.png'


const meta = {
	title: 'entities/CartForm',
	component: CartForm,
	tags: ['autodocs'],
	args: {},
	decorators: [StoreDecorator({})]

} satisfies Meta<typeof CartForm>

export default meta

type Story = StoryObj<typeof meta>;


export const EmptyDark: Story = {
	render: (args) => <CartForm {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const EmptyLight: Story = {
	render: (args) => <CartForm {...args}/>,
}

export const Dark: Story = {
	render: (args) => <CartForm {...args}/>,
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			cart: {
				products: {
					[1]: {
						product: {
							rating: 3,
							name: 'prod',
							price: 200,
							icon: ProductMock,
							categoryId: 1,
							id: 1
						},
						amount: 1
					},
					[2]:{
						product: {
							rating: 3,
							name: 'prod2',
							price: 200,
							icon: ProductMock,
							categoryId: 2,
							id: 2
						},
						amount: 2
					}
				}
			}
		})]
}
export const Light: Story = {
	render: (args) => <CartForm {...args}/>,
	decorators: [StoreDecorator({
		cart: {
			products: {
				[1]: {
					product: {
						rating: 3,
						name: 'prod',
						price: 200,
						icon: ProductMock,
						categoryId: 1,
						id: 1
					},
					amount: 1
				},
				[2]:{
					product: {
						rating: 3,
						name: 'prod2',
						price: 200,
						icon: ProductMock,
						categoryId: 2,
						id: 2
					},
					amount: 2
				}
			}
		}
	})]
}
