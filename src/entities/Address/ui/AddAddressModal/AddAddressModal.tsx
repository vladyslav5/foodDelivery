import React, {Suspense} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {AddAddressForm} from '../AddAddressForm/AddAddressForm'

interface AddAddressModalProps {
    isOpen:boolean,
	onClose:()=>void
}

export const AddAddressModal = (props: AddAddressModalProps) => {
	const {
		isOpen,
		onClose
	} = props
	return (
		<Modal isOpen={isOpen} onClose={onClose} lazy>
			<Suspense>
				<AddAddressForm onSuccess={onClose}/>
			</Suspense>
		</Modal>
	)
}
