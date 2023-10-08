import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import MainPage from './MainPage'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import ProductMock from 'shared/assets/ProductMock.png'
import {menuReducer} from 'entities/Menu'

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
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


} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>;


export const Light: Story = {
	render: () => <MainPage />,
}
export const Dark: Story = {
	render: () => <MainPage/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}