import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './CartProduct.module.scss'
import Button, {ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {Text, TextAlign} from 'shared/ui/Text/Text'
import Plus from 'shared/assets/icons/plus.svg'
import Minus from 'shared/assets/icons/minus.svg'
import Delete from 'shared/assets/icons/delete.svg'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {CartItem} from '../../model/type/cart'
import {ProductId} from 'entities/Product'

interface CartProductProps {
    className?: string
    cartItem: CartItem,
	productId:ProductId,
	increment:(productId:ProductId)=>void
	decrement:(productId:ProductId)=>void
	remove:(productId:ProductId)=>void
}

export const CartProduct = (props: CartProductProps) => {
	const {
		className,
		cartItem,
		productId,
		increment,
		remove,
		decrement
	} = props
	const {product,amount} = cartItem
	const isMinusDisabled = amount<=1

	return (
		<div className={classNames(cls.CartProduct, {}, [className!])}>
			<img className={cls.icon} src={product.icon}/>
			<div className={cls.content}>
				<Text align={TextAlign.CENTER} text={product.name}/>
				<div className={cls.price}>
					<span>$</span>{product.price}
				</div>
				<div className={cls.amount}>
					<Button
						rounded
						square
						className={cls.btn}
						size={ButtonSize.SIZE_40}
						hover
						onClick={()=>increment(productId)}
					>
						<Plus/>
					</Button>
					<Input
						className={cls.input}
						theme={InputTheme.PRIMARY_INVERTED}
						value={amount}
						squared
						onInput={()=>{}}
						type={'text'}
					/>
					<Button
						rounded
						square
						className={cls.btn}
						size={ButtonSize.SIZE_40}
						onClick={()=>decrement(productId)}
						hover
						disabled={isMinusDisabled}
					>
						<Minus/>
					</Button>
					<Button
						rounded
						theme={ButtonTheme.CLEAR}
						square
						className={cls.btn}
						size={ButtonSize.SIZE_40}
						hover
						onClick={()=>remove(productId)}
					>
						<Delete width={'40px'} height={'40px'} />
					</Button>
				</div>
			</div>
		</div>
	)
}
