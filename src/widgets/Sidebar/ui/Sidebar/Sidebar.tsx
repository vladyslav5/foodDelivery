import React, {useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import Button, {ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {
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
		</div>
	)
}
