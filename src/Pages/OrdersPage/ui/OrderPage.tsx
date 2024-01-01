import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './OrderPage.module.scss'
import {PastOrders} from 'entities/Order'

interface OrderPageProps {
    className?: string
}

const OrderPage = ({className}: OrderPageProps) => {
	return (
		<div className={classNames(cls.OrderPage, {}, [className!])}>
			<PastOrders/>
		</div>
	)
}
export default OrderPage