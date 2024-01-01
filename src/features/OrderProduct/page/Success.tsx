import {classNames} from 'shared/lib/helpers/classNames/classNames'
// import cls from './Succsess.module.scss'
import {useEffect} from 'react'
import {$api} from 'shared/api/api'
import {useLocation} from 'react-router-dom'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {Order} from 'entities/Order'
import {cartActions} from 'entities/Cart'
interface SuccessProps {
    className?: string,
}

export const Success = ({className}: SuccessProps) => {
	const location = useLocation()
	const id = new URLSearchParams(location.search).get('order_id')
	const dispatch = useAppDispatch()
	useEffect(()=>{
		id && $api.get<Order>(`/orders/${id}`).then(res=> {
			$api.put(`/orders/${id}`,{...res.data,status:'success'})
		})
		dispatch(cartActions.reset())
	},[])
	return (
		<div className={classNames('', {}, [className!])}>
			Success
		</div>
	)
}
