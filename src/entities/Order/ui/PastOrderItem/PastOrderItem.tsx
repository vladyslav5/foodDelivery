import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './PastOrderItem.module.scss'
import {Order} from '../../model/type/order'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import Cash from 'shared/assets/icons/Cash.svg'
import Card from 'shared/assets/icons/Card.svg'

interface PastOrderItemProps {
    className?: string,
    order: Order
}

export const PastOrderItem = ({className, order}: PastOrderItemProps) => {
	const isCash = order.paymentWay === 'cash on delivery'
	const isFailed = order.status === 'error'
	return (
		<div className={classNames(cls.PastOrderItem, {}, [className!])}>
			<p>{order.date}</p>
			<p>{order.address.address}</p>
			<Text text={order.status} theme={isFailed ? TextTheme.ERROR : TextTheme.SECONDARY}/>
			{
				order.products.map(cartItem =>
					<div key={cartItem.product.id} className={cls.product}>
						<img src={cartItem.product.icon} className={cls.icon}/>
						<Text text={cartItem.product.name}/>
						<p>{'x'}{cartItem.amount}</p>
						<p className={cls.price}>{cartItem.product.price * cartItem.amount}$</p>
					</div>
				)
			}
			{
				isCash ? <Cash/> : <Card/>
			}
		</div>
	)
}
