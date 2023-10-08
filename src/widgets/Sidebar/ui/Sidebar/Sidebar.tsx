import React, {memo, useCallback, useState} from 'react'
import {classNames, Mods} from 'shared/lib/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {useTranslation} from 'react-i18next'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import {getUserAuthData, userAction} from 'entities/User'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg'
import LogoutIcon from 'shared/assets/icons/LogoutIcon.svg'
import {useSelector} from 'react-redux'


type SidebarProps = {
    className?: string;
};

export const Sidebar = memo(({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true)
	const {t} = useTranslation()
	const onToggle = () => {
		setCollapsed(prevState => !prevState)
	}
	const authData = useSelector(getUserAuthData)
	const dispatch = useAppDispatch()
	const onLogout = useCallback(() => {
		dispatch(userAction.logout())
	}, [dispatch])
	const mods: Mods = {
		[cls.collapsed]: collapsed,
	}
	return (
		<div
			data-testid={'sidebar'}
			className={classNames(cls.Sidebar, mods,
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
				className={cls.item}
				to={AppRoutes.profile}
			>
				<ProfileIcon className={cls.icon}/>
				<span
					className={cls.link}
				>
					{t('Profile')}
				</span>
			</AppLink>
			{authData && <Button
				className={classNames(cls.logout, {}, [cls.item])}
				onClick={onLogout}
				theme={ButtonTheme.CLEAR}
			>
				<LogoutIcon className={cls.icon}/>
				<span
					className={cls.link}
				>
					{t('log out')}
				</span>
			</Button>}
		</div>
	)
})
