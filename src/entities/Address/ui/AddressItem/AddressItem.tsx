import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './AddressItem.module.scss'
import {Address} from '../../model/type/address'
import {Text} from 'shared/ui/Text/Text'
import Button from 'shared/ui/Button/Button'
import Delete from 'shared/assets/icons/delete.svg'
import {useTranslation} from 'react-i18next'
import {useState} from 'react'


interface AddressItemProps {
    className?: string
    address: Address,
    removeAddress: (id: number) => void
	editAddress:(address:Address)=>void
}

export const AddressItem = (props: AddressItemProps) => {
	const {t} = useTranslation('address')
	const [removing, setRemoving] = useState(false)
	const {
		address,
		className,
		removeAddress,
		editAddress
	} = props
	const remove = () => {
		setRemoving(true)
		setTimeout(()=>{
			removeAddress(address.id)
		},2000)
	}
	const edit = ()=>{
		editAddress(address)
	}
	return (
		<div className={classNames(cls.AddressItem, {[cls.remove]: removing}, [className!])}>
			<Text title={address.name}/>
			<Text text={address.city}/>
			<Text text={address.address}/>
			<Text text={address.phoneNumber}/>
			<Text text={address.pinCode}/>
			<div className={cls.btn}>
				<Button
					onClick={remove}
				>
					<Delete width={'30px'} height={'30px'}/>
				</Button>
				<Button
					onClick={edit}
				>
					{t('Edit')}
				</Button>
			</div>
		</div>
	)
}
