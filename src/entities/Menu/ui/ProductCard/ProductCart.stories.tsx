import type {Meta, StoryObj} from '@storybook/react'
import {ProductCard} from './ProductCard'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import ProductMock from 'shared/assets/ProductMock.png'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'

const meta = {
	title: 'entities/ProductCard',
	component: ProductCard,
	tags: ['autodocs'],
	args:{
		product:{
			icon:ProductMock,
			price:300,
			name:'pizza',
			rating:4,
			id:1,
			categoryId:1
		}
	},
	decorators:[StoreDecorator({cart:{}})]

} satisfies Meta<typeof ProductCard>

export default meta

type Story = StoryObj<typeof meta>;


export const Dark: Story = {
	render: (args) => <ProductCard {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
export const Light: Story = {
	render: (args) => <ProductCard {...args}/>,
}

