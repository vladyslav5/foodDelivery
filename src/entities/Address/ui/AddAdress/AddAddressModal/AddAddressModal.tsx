import React, {Suspense} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {AddAddressForm} from '../AddAddressForm/AddAddressForm'

interface AddAddressModalProps {
    className?: string,
    isOpen:boolean,
	onClose:()=>void
}

export const AddAddressModal = (props: AddAddressModalProps) => {
	const {
		className,
		isOpen,
		onClose
	} = props
	return (
		<Modal isOpen={isOpen} onClose={onClose} lazy>
			<Suspense>
				<AddAddressForm/>
			</Suspense>
		</Modal>
	)
}
