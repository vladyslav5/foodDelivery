import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {useTranslation} from 'react-i18next'
import React, {useState} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import Logo from 'shared/assets/icons/logo.svg'
type NavBarProps = {
	className?: string;
};

export const Navbar = ({className}: NavBarProps) => {
	const {t} = useTranslation()
	const [isOpen,setIsOpen] = useState(false)
	return (
		<div className={classNames(cls.Navbar, {}, [className!])}>
			<Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
				{'contetn'}
			</Modal>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.main} className={cls.mainLink}>{t('Main')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.about}>{t('About')}</AppLink>
			</div>
			<Button
				className={cls.authBtn}
				onClick={()=>setIsOpen(true)}
				theme={ButtonTheme.CLEAR}
			>
				{t('auth')}
			</Button>
			<div className={cls.logo}>
				<Logo className={cls.logo}/>
				{t('names')}
			</div>
		</div>
	)
}
