import type {Meta, StoryObj} from '@storybook/react'
import {CategoryItem} from './CategoryItem'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import ProductMock from 'shared/assets/ProductMock.png'


const meta = {
	title: 'entities/CategoryItem',
	component: CategoryItem,
	tags: ['autodocs'],
	args:{
		onClick:()=>{},
		category:{
			title:'burggers',
			icon: ProductMock,
			id:1
		}
	}

} satisfies Meta<typeof CategoryItem>

export default meta

type Story = StoryObj<typeof meta>;


export const Dark: Story = {
	render: (args) => <CategoryItem {...args}/>,
	decorators:[ThemeDecorator(Theme.DARK)]
}
export const Light: Story = {
	render: (args) => <CategoryItem {...args}/>,
}

