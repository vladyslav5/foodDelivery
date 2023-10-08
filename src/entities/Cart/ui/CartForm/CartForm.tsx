import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './CartForm.module.scss'
import {useSelector} from 'react-redux'
import {getCartProducts} from '../../model/selectors/getCartProducts/getCartProducts'
import {CartProduct} from '../CartProduct/CartProduct'
import {useTranslation} from 'react-i18next'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import RightArrow from 'shared/assets/icons/right.svg'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import Button from 'shared/ui/Button/Button'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {cartActions} from '../../model/slice/cartSlice'
import {useCallback} from 'react'
import {ProductId} from 'entities/Product'

interface CartFormProps {
    className?: string,
    onHide: () => void

}

const CartForm = ({className, onHide}: CartFormProps) => {
	const products = useSelector(getCartProducts)
	const totalPrice = Object.entries(products)
		.map(([, cartProduct]) => cartProduct)
		.reduce((sum, {product, amount}) => sum + product.price * amount, 0)
	const {t} = useTranslation('main')

	const dispatch = useAppDispatch()
	const incrementProduct = useCallback((productId: ProductId) => {
		dispatch(cartActions.incrementProduct(productId))
	}, [dispatch])
	const decrementProduct = useCallback((productId: ProductId) => {
		dispatch(cartActions.decrementProduct(productId))
	}, [dispatch])
	const removeProduct = useCallback((productId: ProductId) => {
		dispatch(cartActions.deleteProduct(productId))
	}, [dispatch])
	const viewAllClick = () => {
		onHide()
	}
	if (Object.keys(products).length === 0) {
		return <div className={classNames(cls.CartForm, {}, [className!])}>
			<Text title={t('Cart is empty')}/>
		</div>
	}
	return (
		<div className={classNames(cls.CartForm, {}, [className!])}>
			<div className={cls.menu}>
				{t('Order Menu')}
				<AppLink className={cls.link} to={AppRoutes.main} onClick={viewAllClick}>
					<span>{t('View All')}</span>
					<RightArrow/>
				</AppLink>
			</div>
			{
				Object.entries(products).map(([productKey, cartItem]) =>
					<CartProduct
						productId={productKey}
						key={productKey}
						cartItem={cartItem}
						decrement={decrementProduct}
						increment={incrementProduct}
						remove={removeProduct}
					/>)
			}
			<Text className={cls.totalPrice} theme={TextTheme.SECONDARY} text={` total price - ${totalPrice}$`}/>
			<Button>{t('Proceed to checkout')}</Button>
		</div>
	)
}

export default CartForm