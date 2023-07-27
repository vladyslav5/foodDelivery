import React, {useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import Button, {ThemeButton} from 'shared/ui/Button/Button'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {useTranslation} from 'react-i18next'


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
			<Button
				data-testid={'toggle'}
				theme={ThemeButton.CLEAR}
				onClick={onToggle}
			>
				{t('Toogle')}
			</Button>
			<LangSwitcher/>
		</div>
	)
}
