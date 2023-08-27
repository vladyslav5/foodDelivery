import React from 'react'
import {MainPage} from 'Pages/MainPage'
import {AboutPage} from 'Pages/AboutPage'
import {NotFoundPage} from 'Pages/NotFoundPage'
import {ProfilePage} from 'Pages/ProfilePage'

export type RouteConfig = {
	path: string;
	element: React.ReactNode;
};

export enum AppRoutes {
	main = '/',
	about = '/about',
	notFound = '*',
	profile='/profile'
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
