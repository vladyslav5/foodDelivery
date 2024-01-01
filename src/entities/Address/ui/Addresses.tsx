import {useCallback, useEffect, useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Addresses.module.scss'
import {useTranslation} from 'react-i18next'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import Plus from 'shared/assets/icons/plus.svg'
import {useSelector} from 'react-redux'
import {getAddresses} from '../model/selectors/getAdresses/getAdresses'
import {AddAddressModal} from './AddAddressModal/AddAddressModal'
import {AddressItem} from './AddressItem/AddressItem'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {fetchAddresses} from '../model/services/fetchAddresses/fetchAddresses'
import {getAddressIsLoading} from '../model/selectors/getAddressIsLoading/getAddressIsLoading'
import {Loader} from 'shared/ui/Loader/Loader'
import {getAddressError} from '../model/selectors/getAddressError/getAddressError'
import {deleteAddress} from '../model/services/deleteAddress/deleteAddress'
import {UpdateAddressModal} from './UpdateAddressModal/UpdateAddressModal'
import {Address} from '../model/type/address'

interface ProfileAddressesProps {
    className?: string
}

const Addresses = ({className}: ProfileAddressesProps) => {
	const {t} = useTranslation('profile')
	const addresses = useSelector(getAddresses)
	const error = useSelector(getAddressError)
	const isLoading = useSelector(getAddressIsLoading)
	const [editingAddress, setEditingAddress] = useState<Address>({} as Address)
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchAddresses())
		}
	}, [dispatch])

	const editAddress = useCallback((address: Address) => {
		setEditingAddress(address)
		showUpdateModal()
	}, [])
	const [addAddressModal, setAddAddressModal] = useState<boolean>(false)
	const [updateAddressModal, setUpdateAddressModal] = useState(false)
	const showUpdateModal = () => {
		setUpdateAddressModal(true)
	}
	const hideUpdateModal = () => {
		setUpdateAddressModal(false)
	}
	const showAddModal = () => {
		setAddAddressModal(true)
	}
	const hideAddModal = () => {
		setAddAddressModal(false)
	}
	const removeAddress = useCallback(async (id: number) => {
		await dispatch(deleteAddress(id))
	}, [dispatch])
	if (isLoading) {
		return <div className={classNames(cls.Addresses, {}, [className!])}>
			<div className={cls.addressesList}>
				<Loader/>
			</div>
		</div>
	}
	if (error) {
		return <div className={classNames(cls.Addresses, {}, [className!])}>
			<div className={cls.addressesList}>
				<Text title={error} theme={TextTheme.ERROR}/>
			</div>
		</div>
	}
	return (
		<div className={classNames(cls.Addresses, {}, [className!])}>
			<AddAddressModal isOpen={addAddressModal} onClose={hideAddModal}/>
			<UpdateAddressModal isOpen={updateAddressModal} onClose={hideUpdateModal} addressItem={editingAddress}
				onSuccess={hideUpdateModal}/>
			<Text title={t('Your Addresses')}/>
			<div className={cls.addressesList}>
				{
					addresses?.length ? addresses?.map((address) => <AddressItem
						key={address.id}
						removeAddress={removeAddress}
						editAddress={editAddress}
						address={address}
					/>)
						: t('there is no adresses')
				}
				<Button
					className={cls.btn}
					theme={ButtonTheme.OUTLINE_DASHED}
					onClick={showAddModal}
				>
					<Plus/> {t('Add Address')}
				</Button>
			</div>
		</div>
	)
}

export default Addresses