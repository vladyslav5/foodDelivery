import {AboutPage} from 'Pages/AboutPage'
import {NotFoundPage} from 'Pages/NotFoundPage'
import {ProfilePage} from 'Pages/ProfilePage'
import {MainPage} from 'Pages/MainPage'
import {ReactNode} from 'react'
import {Success} from 'features/OrderProduct'
import {OrderProductPage} from 'Pages/OrderProductPage'
import {OrdersPage} from 'Pages/OrdersPage'
import {RegPage} from 'Pages/RegPage'



export type RouteConfig = {
	path: string;
	element: ReactNode;
};

export enum AppRoutes {
	about = '/about',
	main = '/',

	profile='/profile',
	notFound = '*',
	success='/success',
	order='/order',
	orders='/orders',

	registration='/reg'
}
export const wholePageRoutes:RouteConfig[]=[
	{
		path:AppRoutes.order,
		element:<OrderProductPage/>
	},
	{
		path:AppRoutes.registration,
		element:<RegPage/>
	}
]
export const publicRoutes: RouteConfig[] = [
	{
		path: AppRoutes.main,
		element: <MainPage/>,
	},
	{
		path:AppRoutes.orders,
		element:<OrdersPage/>
	},
	{
		path:AppRoutes.success,
		element:<Success/>
	},
	{
		path: AppRoutes.about,
		element: <AboutPage/>,
	},
	{
		path:AppRoutes.notFound,
		element:<NotFoundPage/>
	},
	{
		path:AppRoutes.profile,
		element:<ProfilePage/>
	},

]

export const authRoutes: RouteConfig[] = []
