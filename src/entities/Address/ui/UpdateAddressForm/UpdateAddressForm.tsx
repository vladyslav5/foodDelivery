import React, {useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './UpdateAddressForm.module.scss'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {useTranslation} from 'react-i18next'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {LoadingButton} from 'widgets/LoadingButton/ui/LoadingButton'
import {useSelector} from 'react-redux'
import {Address} from '../../model/type/address'
import {
	getAddressIsModalLoading
} from '../../model/selectors/getAddressIsModalLoading/getAddressIsModalLoading'
import {updateAddress} from 'entities/Address/model/services/updateAddress/updateAddress'


export interface UpdateAddAddressFormProps {
    className?: string,
	addressItem:Address,
    onSuccess: () => void,
}

export const UpdateAddressForm = (props: UpdateAddAddressFormProps) => {
	const {
		addressItem,
		onSuccess,
		className
	} = props
	const {t} = useTranslation('address')
	const [name, setName] = useState<string>(addressItem.name)
	const [city, setCity] = useState<string>(addressItem.city)
	const [address, setAddress] = useState<string>(addressItem.address)
	const [phoneNumber, setPhoneNumber] = useState<string>(addressItem.phoneNumber)
	const [pinCode, setPinCode] = useState<string>(addressItem.pinCode)
	const dispatch = useAppDispatch()
	const isLoading = useSelector(getAddressIsModalLoading)
	const addAddress = async () => {
		const res = await dispatch(updateAddress({
			id:addressItem.id,
			address: address,
			city: city,
			name: name,
			phoneNumber: phoneNumber,
			pinCode: pinCode
		} as Address))
		if (res.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}
	return (
		<div className={classNames(cls.AddAddressForm, {}, [className!])}>
			<Input
				theme={InputTheme.PRIMARY}
				placeholder={t('Name')}
				value={name}
				onChange={setName}
			/>
			<Input
				theme={InputTheme.PRIMARY}
				placeholder={t('Address')}
				value={address}
				onChange={setAddress}
			/>
			<Input
				theme={InputTheme.PRIMARY}
				placeholder={t('City')}
				value={city}
				onChange={setCity}
			/>
			<Input
				theme={InputTheme.PRIMARY}
				placeholder={t('Pin Code')}
				value={pinCode}
				onChange={setPinCode}
			/>
			<Input
				theme={InputTheme.PRIMARY}
				placeholder={t('Phone Number')}
				value={phoneNumber}
				onChange={setPhoneNumber}
			/>
			<LoadingButton
				text={t('Edit Address')}
				onClick={addAddress}
				isLoading={isLoading}
			/>
		</div>
	)
}
