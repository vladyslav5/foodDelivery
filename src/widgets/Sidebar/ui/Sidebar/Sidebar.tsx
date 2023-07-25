import React, {useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import Button, {ThemeButton} from 'shared/ui/Button/Button'
import {LangSwitcher} from 'widgets/LangSwitcher'

type SidebarProps = {
	className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true)
	const onToggle = () => {
		setCollapsed(prevState => !prevState)
	}

	return (
		<div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className!])}>
			<Button theme={ThemeButton.CLEAR} onClick={onToggle}>Toogle</Button>
			<LangSwitcher/>
		</div>
	)
}
