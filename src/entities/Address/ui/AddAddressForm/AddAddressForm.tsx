import React, {useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './AddAddressForm.module.scss'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {useTranslation} from 'react-i18next'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {LoadingButton} from 'widgets/LoadingButton/ui/LoadingButton'
import {useSelector} from 'react-redux'
import {Address} from '../../model/type/address'
import {
	getAddressIsModalLoading
} from '../../model/selectors/getAddressIsModalLoading/getAddressIsModalLoading'
import {postAddress} from 'entities/Address/model/services/postAddress/postAddress'


interface AddAddressFormProps {
    className?: string
    onSuccess: () => void,
}

export const AddAddressForm = (props: AddAddressFormProps) => {
	const {
		onSuccess,
		className
	} = props
	const {t} = useTranslation('address')
	const [name, setName] = useState<string>('')
	const [city, setCity] = useState<string>('')
	const [address, setAddress] = useState<string>('')
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [pinCode, setPinCode] = useState<string>('')
	const dispatch = useAppDispatch()
	const isLoading = useSelector(getAddressIsModalLoading)
	const addAddress = async () => {
		const res = await dispatch(postAddress({
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
				text={t('Add Address')}
				onClick={addAddress}
				isLoading={isLoading}
			/>
		</div>
	)
}
