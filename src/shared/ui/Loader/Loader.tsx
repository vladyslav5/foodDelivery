import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({className}: LoaderProps) => {
	return (
		<span className={classNames(cls.Loader, {}, [className!])}>
		</span>
	)
}