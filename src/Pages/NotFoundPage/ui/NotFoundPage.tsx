import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import cls from './NotFoundPage.module.scss'
interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
	const {pathname} = useLocation()
	const {t} = useTranslation()
	return (
		<div className={classNames(cls.NotFoundPage, {}, [className!])}>
			{
				t('page not found for adress')
			}
			<p>
				{pathname}
			</p>
		</div>
	)
}
