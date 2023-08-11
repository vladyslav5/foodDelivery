import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Loader.module.scss'

export enum LoaderTheme {
    SMALL = 'small'
}

interface LoaderProps {
    className?: string,
    theme?: LoaderTheme
}

export const Loader = (props: LoaderProps) => {
	const {
		className,
		theme
	}
        = props

	const additional = [
        className!,
        cls[theme!]
	]
	return (
		<div className={classNames(cls.Loader, {}, additional)}>
			<span className={cls.span}>
			</span>
		</div>

	)
}
