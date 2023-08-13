import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import React, {useCallback, useState} from 'react'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import Logo from 'shared/assets/icons/logo.svg'
import {LoginModal} from 'features/AuthByUserName'
import {getUserAuthData, userActions} from 'entities/User'
import {useDispatch, useSelector} from 'react-redux'



type NavBarProps = {
	className?: string;
};

export const Navbar = ({className}: NavBarProps) => {
	const {t} = useTranslation()
	const [isAuthOpen,setIsAuthOpen] = useState(false)
	const authData = useSelector(getUserAuthData)

	const dispatch = useDispatch()

	const hideModal = ()=>{
		setIsAuthOpen(false)
	}
	const showModal = ()=>{
		setIsAuthOpen(true)
	}
	const onLogout = useCallback(()=>{
		dispatch(userActions.logout())
	},[dispatch])
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
					<Button
						className={cls.authBtn}
						onClick={onLogout}
						theme={ButtonTheme.CLEAR}
					>
						{t('log out')}
					</Button>
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
				<Logo className={cls.logo}/>
				{t('names')}
			</div>
		</div>
	)
}
