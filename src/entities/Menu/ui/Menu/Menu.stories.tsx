import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import Menu from './Menu'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import ProductMock from 'shared/assets/ProductMock.png'
import {menuReducer} from '../../model/slice/menuSlice'

const meta = {
	title: 'pages/Menu',
	component: Menu,
	tags: ['autodocs'],
	decorators:[StoreDecorator({
		menu:{
			isLoadingProducts:false,
			isLoadingCategories:false,
			categories:[
				{
					title:'pizzas',
					id:1,
					icon:ProductMock
				},
				{
					title:'burgers',
					id:2,
					icon:ProductMock
				}
			],
			products:[
				{
					id:1,
					icon:ProductMock,
					rating:2,
					name:'pizza',
					price:45,
					categoryId:1
				},
				{
					id:2,
					icon:ProductMock,
					rating:2,
					name:'pizza 2',
					price:45,
					categoryId:1
				},
				{
					id:3,
					icon:ProductMock,
					rating:2,
					name:'burrger',
					price:45,
					categoryId:2
				},
				{
					id:4,
					icon:ProductMock,
					rating:2,
					name:'burgger 2',
					price:45,
					categoryId:2
				}
			]
		}
	},{menu:menuReducer})]


} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: () => <Menu />,
}
export const Dark: Story = {
	render: () => <Menu/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}