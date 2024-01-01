import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './AddressSelect.module.scss'
import {useSelector} from 'react-redux'
import {getAddresses} from '../../../../entities/Address/model/selectors/getAdresses/getAdresses'
import {ChangeEvent, useEffect, useState} from 'react'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {fetchAddresses} from '../../../../entities/Address/model/services/fetchAddresses/fetchAddresses'
import {getAddressIsLoading} from 'entities/Address/model/selectors/getAddressIsLoading/getAddressIsLoading'
import {Loader} from 'shared/ui/Loader/Loader'
import {useTranslation} from 'react-i18next'
import Button from 'shared/ui/Button/Button'
import {Text} from 'shared/ui/Text/Text'
import {AddAddressModal} from 'entities/Address'
import {orderProductActions} from '../../model/slice/orderProductSlice'

interface AddressSelectProps {
    className?: string
	nextPage:()=>void

}

export const AddressSelect = (props: AddressSelectProps) => {
	const {
		nextPage,
		className
	} = props
	const dispatch = useAppDispatch()
	useEffect(()=>{
		if(__PROJECT__ !== 'storybook'){
			dispatch(fetchAddresses())
		}
	},[dispatch])
	const addresses = useSelector(getAddresses)
	const isLoading = useSelector(getAddressIsLoading)
	const {t} = useTranslation('orderProduct')
	const [nextDisabled,setNextDisabled] = useState<boolean>(true)
	const [addModal,setAddModal] = useState(false)
	const hideModal = ()=>{
		setAddModal(false)
	}
	const showModal = ()=>{
		setAddModal(true)
	}
	const onSelectHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
		if(e.target.value !==''){
			setNextDisabled(false)
			const address = addresses?.find(address=>address.id===Number(e.target.value)) || null
			dispatch(orderProductActions.selectAddressId(address))
		}else{
			setNextDisabled(true)
		}
	}
	if(isLoading){
		return <Loader/>
	}
	return (
		<div className={classNames(cls.AddressSelect, {}, [className!])}>
			{
				addresses?.length ? <select required className={cls.select} onChange={onSelectHandler}>
					<option value={''}>{t('Empty')}</option>
					{
						addresses?.map(address=><option key={address.id} value={address.id}>
							{address.name}
						</option>)
					}
				</select>
					:
					<Text title={'no addreses'}/>
			}
			<AddAddressModal isOpen={addModal} onClose={hideModal}/>
			<div>
				<Button onClick={showModal}>Add</Button>
			</div>
			<Button disabled={nextDisabled} onClick={nextPage}>next</Button>
		</div>
	)
}
