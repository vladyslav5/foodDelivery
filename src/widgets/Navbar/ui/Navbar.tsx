import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import React, {useState} from 'react'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import Logo from 'shared/assets/icons/logo.svg'
import {LoginModal} from 'features/AuthByUserName'
import {getUserAuthData} from 'entities/User'
import {useSelector} from 'react-redux'



type NavBarProps = {
	className?: string;
};

export const Navbar = ({className}: NavBarProps) => {
	const {t} = useTranslation()
	const [isAuthOpen,setIsAuthOpen] = useState(false)
	const authData = useSelector(getUserAuthData)
	const hideModal = ()=>{
		setIsAuthOpen(false)
	}
	const showModal = ()=>{
		setIsAuthOpen(true)
	}
	return (
		<div className={classNames(cls.Navbar, {}, [className!])}>
			{
				isAuthOpen
				&&
				<LoginModal isOpen={isAuthOpen} onClose={hideModal}/>
			}
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.main} className={cls.mainLink}>{t('Main')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.about}>{t('About')}</AppLink>
			</div>
			{
				authData
					?
					<div></div>
					:
					<Button
						className={cls.authBtn}
						onClick={showModal}
						theme={ButtonTheme.CLEAR}
					>
						{t('auth')}
					</Button>
			}
			<div className={cls.logo}>
				<Logo/>
				{t('names')}
			</div>
		</div>
	)
}
