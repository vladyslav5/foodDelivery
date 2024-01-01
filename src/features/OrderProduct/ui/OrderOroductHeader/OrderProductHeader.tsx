import cls from './OrderProductHeader.module.scss'
import ShippingIcon from 'shared/assets/icons/box.svg'
import AuthIcon from 'shared/assets/icons/Auth.svg'
import PaymentIcon from 'shared/assets/icons/Payment.svg'
import {classNames} from 'shared/lib/helpers/classNames/classNames'

interface OrderProductHeaderProps {
    className?: string,
	number:number
}
enum steps{
	'Auth' = 1,
	'Shipping'=2,
	'Payment'=3
}
export const OrderProductHeader = ({className,number}: OrderProductHeaderProps) => {

	return (
		<div className={classNames(cls.OrderProductHeader, {}, [className!])}>
			<div className={cls.line}></div>
			<AuthIcon className={classNames(cls.icon, {[cls.selected]:steps.Auth ===number}, [className!])}/>
			<ShippingIcon className={classNames(cls.icon, {[cls.selected]:steps.Shipping ===number}, [className!])}/>
			<PaymentIcon className={classNames(cls.icon, {[cls.selected]:steps.Payment ===number}, [className!])}/>
		</div>
	)
}
