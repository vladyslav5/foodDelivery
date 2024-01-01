import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './OrderProduct.module.scss'
import {FormSwitcher} from './FormSwitcher/FormSwitcher'
import {useState} from 'react'
import {OrderProductHeader} from './OrderOroductHeader/OrderProductHeader'
import Button from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {addressReducer} from 'entities/Address'
import {orderProductReducer} from '../model/slice/orderProductSlice'
import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

interface OrderProductProps {
    className?: string
}

const reducers: ReducerList = {
	address: addressReducer,
	orderProduct:orderProductReducer
}
export const OrderProduct = ({className}: OrderProductProps) => {
	const authData = useSelector(getUserAuthData)
	let initialPage = 1
	if (authData) {
		initialPage = 2
	}
	const [page, setPage] = useState(initialPage)
	const nextPage = () => {
		setPage(prevState => prevState+1)
	}
	const prevPage = () => {
		setPage(prevState => prevState-1)
	}
	const navigate = useNavigate()
	const {t} = useTranslation()
	const onCancel = ()=>{
		navigate(-1)
	}
	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.OrderProduct, {}, [className!])}>
				<OrderProductHeader number={page}/>
				<div className={cls.form}>
					<FormSwitcher nextPage={nextPage} prevPage={prevPage} number={page}/>
				</div>
			</div>
			<Button onClick={onCancel}>{t('Cancel')}</Button>
		</DynamicModuleLoader>
	)
}
