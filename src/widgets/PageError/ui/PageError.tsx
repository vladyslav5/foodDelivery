import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './PageError.module.scss'
import {useTranslation} from 'react-i18next'
import Button from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {
	const {t} = useTranslation()
	const reloadPage = () => {
		location.reload()
	}
	return (
		<div className={classNames(cls.PageError, {}, [className!])}>
			<p>{t('There was an error')}</p>
			<Button onClick={reloadPage}>{t('refresh')}</Button>
		</div>
	)
}
