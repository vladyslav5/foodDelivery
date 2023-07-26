import React, {useEffect, useState} from 'react'
import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {useTranslation} from 'react-i18next'

type NavBarProps = {
	className?: string;
};

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation()
	return (
		<div className={classNames(cls.Navbar, {}, [className!])}>
			<ThemeSwitcher/>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.main} className={cls.mainLink}>{t('Main')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.about}>{t('About')}</AppLink>
			</div>
			<div className={cls.logo}>
				{t('names')}
			</div>
		</div>
	)
}
