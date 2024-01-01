import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './PastOrders.module.scss'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {orderReducer} from '../model/slice/orderSlice'
import {useSelector} from 'react-redux'
import {getPastOrders} from '../model/selectors/getPastOrders/getPastOrders'
import {PastOrderItem} from 'entities/Order/ui/PastOrderItem/PastOrderItem'
import {useEffect} from 'react'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {fetchPastOrders} from 'entities/Order/model/services/fetchPastOrders'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {useTranslation} from 'react-i18next'
import {getOrdersIsLoading} from '../model/selectors/getOrdersIsLoading/getOrdersIsLoading'
import {Loader} from 'shared/ui/Loader/Loader'
import {getOrdersError} from '../model/selectors/getOrdersError/getOrdersError'

interface PastOrdersProps {
    className?: string
}

const reducesList: ReducerList = {
	order: orderReducer
}
export const PastOrders = ({className}: PastOrdersProps) => {
	const pastOrders = useSelector(getPastOrders)
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchPastOrders())
		}
	}, [dispatch])
	const isLoading = useSelector(getOrdersIsLoading)
	const {t} = useTranslation('orders')
	const error = useSelector(getOrdersError)
	if (isLoading) {
		return <div className={classNames(cls.PastOrders, {}, [className!])}>
			<Loader/>
		</div>
	}
	if (error) {
		return <div className={classNames(cls.PastOrders, {}, [className!])}>
			<Text title={error} theme={TextTheme.ERROR}/>
		</div>
	}
	return (
		<DynamicModuleLoader reducers={reducesList}>
			{pastOrders?.length ? <div className={classNames(cls.PastOrders, {}, [className!])}>
				{
					pastOrders?.map(order => <PastOrderItem order={order} key={order.id}/>)
				}
			</div>
				: <Text title={t('No past orders')}/>
			}
		</DynamicModuleLoader>
	)
}
