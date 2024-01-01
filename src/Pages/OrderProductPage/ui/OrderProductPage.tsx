import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './OrderProductPage.module.scss'
import {OrderProduct} from 'features/OrderProduct'

interface OrderPageProps {
    className?: string
}

const OrderProductPage = ({className}: OrderPageProps) => {
	return (
		<div className={classNames(cls.OrderPage, {}, [className!])}>
			<OrderProduct/>
		</div>
	)
}
export default OrderProductPage