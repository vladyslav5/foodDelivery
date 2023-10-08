import type {Meta, StoryObj} from '@storybook/react'
import  {CartProduct} from './CartProduct'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
// @ts-ignore
import ProductMock from 'shared/assets/ProductMock.png'

const meta = {
	title: 'entities/CartProduct',
	component: CartProduct,
	tags: ['autodocs'],
	args:{
		increment:()=>{},
		decrement:()=>{},
		remove:()=>{},
		productId:1,
		cartItem:{
			product:{
				rating:3,
				name:'prod',
				price:200,
				icon:ProductMock,
				categoryId:1,
				id:1
			},
			amount:1
		}
	},
	decorators:[StoreDecorator({cart:{
		products: {
			[1]: {
				product:{
					rating:3,
					name:'prod',
					price:200,
					icon:ProductMock,
					categoryId:1,
					id:1
				},
				amount:1
			}
		}
	}})]

} satisfies Meta<typeof CartProduct>

export default meta

type Story = StoryObj<typeof meta>;


export const Dark: Story = {
	render: (args) => <CartProduct {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
export const Light: Story = {
	render: (args) => <CartProduct {...args}/>,
}

