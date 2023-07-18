import React from "react";
import MainPage from "../components/Pages/MainPage/MainPage";
import AboutPage from "../components/Pages/AboutPage/AboutPage";
import {MainPageLazy} from "../components/Pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "../components/Pages/AboutPage/AboutPage.lazy";


export interface IRoute {
    path: string
    element: React.ReactNode
}

export enum EnumRoutes {
    main = "/",
    about = "/about"
}

export const publicRoutes: IRoute[] = [
    {
        path: EnumRoutes.main,
        element: <MainPageLazy/>
    },
    {
        path: EnumRoutes.about,
        element: <AboutPageLazy/>
    }
]

export const authRoutes: IRoute[] = []