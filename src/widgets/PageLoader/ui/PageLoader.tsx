import React from 'react'
import cls from './PageLoader.module.scss'
import {Loader} from 'shared/ui/Loader/Loader'
import {classNames} from 'shared/lib/helpers/classNames/classNames'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({className}: PageLoaderProps) => {
	return (
		<Loader className={classNames(cls.PageLoader, {}, [className!])}/>
	)
}
