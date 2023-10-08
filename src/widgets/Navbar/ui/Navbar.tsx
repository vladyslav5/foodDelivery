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
import {CartModal} from 'entities/Cart'
import {getCartProducts} from 'entities/Cart/model/selectors/getCartProducts/getCartProducts'



type NavBarProps = {
	className?: string;
};

export const Navbar = ({className}: NavBarProps) => {
	const {t} = useTranslation()
	const [isAuthOpen,setIsAuthOpen] = useState(false)
	const authData = useSelector(getUserAuthData)
	const productsAmount = Object.keys(useSelector(getCartProducts)).length
	const hideAuthModal = ()=>{
		setIsAuthOpen(false)
	}
	const showAuthModal = ()=>{
		setIsAuthOpen(true)
	}
	const [isCartOpen,setIsCartOpen] = useState<boolean>(false)
	const hideCartModal = ()=>{
		setIsCartOpen(false)
	}
	const showCartModal = ()=>{
		setIsCartOpen(true)
	}
	return (
		<div className={classNames(cls.Navbar, {}, [className!])}>
			{
				isAuthOpen
				&&
				<LoginModal isOpen={isAuthOpen} onClose={hideAuthModal}/>
			}
			<CartModal onClose={hideCartModal} isOpen={isCartOpen}/>
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
						onClick={showAuthModal}
						theme={ButtonTheme.CLEAR}
					>
						{t('auth')}
					</Button>
			}
			<div className={cls.logo} onClick={showCartModal}>
				<Logo/>
				<div className={cls.productAmount}>{productsAmount}</div>
			</div>
			{t('names')}
		</div>
	)
}
