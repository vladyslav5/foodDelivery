import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './AddAddress.module.scss'
import {Input} from 'shared/ui/Input/Input'

interface AddAddressFormProps {
    className?: string
}

export const AddAddressForm = ({className}: AddAddressFormProps) => {
	return (
		<div className={classNames(cls.AddAddressForm, {}, [className!])}>
			<Input
				placeholder={'phone'}
			/>
		</div>
	)
}
