import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProductCard.module.scss'
import {Text} from 'shared/ui/Text/Text'
import Button, {ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import Plus from 'shared/assets/icons/plus.svg'
import {Product} from 'entities/Product'
import {StarsRating} from 'widgets/StarsRating'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {cartActions} from 'entities/Cart'


interface ProductCardProps {
    className?: string
    product: Product
}

export const ProductCard = (props: ProductCardProps) => {
	const dispatch = useAppDispatch()

	const {
		product,
		className
	} = props
	const addInCart = () => {
		dispatch(cartActions.addProduct({[product.id]: {product, amount: 1}}))
	}
	return (
		<div className={classNames(cls.ProductCard, {}, [className!])}>
			<Button
				className={cls.favorite_btn}
				square
				hover
				rounded
				theme={ButtonTheme.CLEAR}
			>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<span className={cls.favorite}>&#9825;</span>
			</Button>
			<img className={cls.icon} src={product.icon}/>
			<Text text={product.name}/>
			<div className={cls.rating}>
				<StarsRating/>
			</div>
			<div className={cls.price}>
				{product.price}$
			</div>
			<Button
				rounded
				square
				className={cls.btn}
				size={ButtonSize.SIZE_40}
				hover
				onClick={addInCart}
			>
				<Plus/>
			</Button>
		</div>
	)
}
