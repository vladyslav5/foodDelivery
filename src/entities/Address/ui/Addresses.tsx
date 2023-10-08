import React, {useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Addresses.module.scss'
import {useTranslation} from 'react-i18next'
import {Text} from 'shared/ui/Text/Text'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import Plus from 'shared/assets/icons/plus.svg'
import {useSelector} from 'react-redux'
import {getAdresses} from 'entities/Address/model/selectors/getAdresses/getAdresses'
import {AddAddressModal} from 'entities/Address/ui/AddAdress/AddAddressModal/AddAddressModal'

interface ProfileAddressesProps {
    className?: string
}

export const Addresses = ({className}: ProfileAddressesProps) => {
	const {t} = useTranslation('profile')
	const addresses = useSelector(getAdresses)
	const [addressModal,setAddressModal] = useState<boolean>(false)
	return (
		<div className={classNames(cls.Addresses, {}, [className!])}>
			<AddAddressModal isOpen={addressModal} onClose={()=>setAddressModal(false)}/>
			<Text title={t('Your Addresses')} />
			<div className={cls.addressesList}>
				{
					addresses?.map((address)=><div key={address.address}>
						{address.address}
					</div>)
				}
				<Button
					theme={ButtonTheme.OUTLINE_DASHED}
					onClick={()=>setAddressModal(true)}
				>
					<Plus/> {t('Add Address')}
				</Button>
			</div>
		</div>
	)
}
