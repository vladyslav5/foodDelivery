import {AboutPage} from 'Pages/AboutPage'
import {NotFoundPage} from 'Pages/NotFoundPage'
import {ProfilePage} from 'Pages/ProfilePage'
import {MainPage} from 'Pages/MainPage'
import {ReactNode} from 'react'


export type RouteConfig = {
	path: string;
	element: ReactNode;
};

export enum AppRoutes {
	about = '/about',
	main = '/',

	profile='/profile',
	notFound = '*',

}

export const publicRoutes: RouteConfig[] = [
	{
		path: AppRoutes.main,
		element: <MainPage/>,
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
