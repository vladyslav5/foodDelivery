import React, {memo, useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {useTranslation} from 'react-i18next'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {AppRoutes} from 'shared/config/routeConfig/routeConfig'

type SidebarProps = {
    className?: string;
};

export const Sidebar = memo(({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true)
	const {t} = useTranslation()
	const onToggle = () => {
		setCollapsed(prevState => !prevState)
	}
	return (
		<div
			data-testid={'sidebar'}
			className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed},
				[className!])
			}>
			<ThemeSwitcher className={cls.themeSwitcher}/>
			<Button
				data-testid={'toggle'}
				theme={ButtonTheme.BACKGROUND}
				onClick={onToggle}
				className={cls.collapseBnt}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<LangSwitcher short={collapsed}/>
			<AppLink
				theme={AppLinkTheme.SECONDARY}
				to={AppRoutes.profile}
			>
				{t('Profile')}
			</AppLink>
		</div>
	)
})
