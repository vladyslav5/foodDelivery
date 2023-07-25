import React from 'react'
import {MainPage} from 'Pages/MainPage'
import {AboutPage} from 'Pages/AboutPage'

export type RouteConfig = {
	path: string;
	element: React.ReactNode;
};

export enum AppRoutes {
	main = '/',
	about = '/about',
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
]

export const authRoutes: RouteConfig[] = []
