import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {Text} from 'shared/ui/Text/Text'
import Button from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {
	getOrderProductPaymentWay
} from '../../model/selectors/getOrderProductPaymentWay/getOrderProductPaymentWay'
import {useTranslation} from 'react-i18next'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {orderProductActions} from '../../model/slice/orderProductSlice'

import CardPayment from 'features/OrderProduct/ui/CheckoutForm/CardPayment'
import {useState} from 'react'
import {getCartProducts} from 'entities/Cart/model/selectors/getCartProducts/getCartProducts'
import {
	getOrderProductAddress
} from 'features/OrderProduct/model/selectors/getOrderProductAddress/getOrderProductAddress'
import {getOrderId} from '../../model/selectors/getOrderId/getOrderId'
import {postOrder} from 'features/OrderProduct/model/services/postOrder'
import {Address} from 'entities/Address'
import {AppRoutes} from 'shared/config/routeConfig/routeConfig'
import {useNavigate} from 'react-router-dom'
import {LoadingButton} from 'widgets/LoadingButton/ui/LoadingButton'
import  cls from './PaymentWay.module.scss'
import {Order, PaymentWay} from 'entities/Order'


interface PaymentWaysProps {
    className?: string
    prev: () => void
}

type OptionType = {
    value: PaymentWay,
    label: string
}

export const PaymentWays = ({className, prev}: PaymentWaysProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const paymentWay = useSelector(getOrderProductPaymentWay)
	const dispatch = useAppDispatch()
	const [isSubmit, setIsSubmit] = useState(false)
	const orderId = useSelector(getOrderId)
	const onSelectHandler = (way: PaymentWay) => {
		dispatch(orderProductActions.selectPaymentWay(way))
	}
	const {t} = useTranslation('orderProduct')
	const options: OptionType[] = [
		{
			value: 'cash on delivery',
			label: t('Cash on delivery')
		},
		{
			value: 'card',
			label: t('Using Card')
		}
	]
	const cartProducts = useSelector(getCartProducts)
	const address = useSelector(getOrderProductAddress) as Address
	const navigate = useNavigate()
	const products = Object.entries(cartProducts).map(([, cartItem]) => cartItem)
	const onSubmit = () => {
		const date = new Date()
		setIsLoading(true)
		setIsSubmit(true)
		dispatch(postOrder({
			products,
			paymentWay,
			address,
			date: date.toDateString(),
			status: 'processing'
		})).then((res) => {
			setIsLoading(false)
			if (paymentWay === 'cash on delivery' && res.meta.requestStatus === 'fulfilled') {
				const {id} = res.payload as Order
				navigate(AppRoutes.success + `?order_id=${id}`)
			}
		})
	}
	if (paymentWay === 'card' && isSubmit && orderId) {
		return <CardPayment orderId={orderId} products={products}/>
	}
	return (
		<div className={classNames('', {}, [className!])}>
			<Text title={'Payment Method'}/>
			<select
				value={paymentWay}
				onChange={(e) => onSelectHandler(e.target.value as PaymentWay)}
			>
				<option value={''}></option>
				{
					options.map(({value, label}) => <option key={value} value={value}>{label}</option>)
				}
			</select>
			<div className={cls.btn}>
				<Button onClick={prev}>back</Button>
				<LoadingButton disabled={!paymentWay} isLoading={isLoading} onClick={onSubmit}
					text={'Submit'}></LoadingButton>
			</div>
		</div>
	)
}
