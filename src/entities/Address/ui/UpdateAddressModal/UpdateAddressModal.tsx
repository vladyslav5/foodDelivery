import React, {Suspense} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'

import {UpdateAddAddressFormProps, UpdateAddressForm} from '../UpdateAddressForm/UpdateAddressForm'

interface AddAddressModalProps extends  UpdateAddAddressFormProps{
    isOpen:boolean,
    onClose:()=>void
}

export const UpdateAddressModal = (props: AddAddressModalProps) => {
	const {
		isOpen,
		onClose,
		...otherProps
	} = props
	return (
		<Modal isOpen={isOpen} onClose={onClose} lazy>
			<Suspense>
				<UpdateAddressForm {...otherProps} onSuccess={onClose}/>
			</Suspense>
		</Modal>
	)
}
