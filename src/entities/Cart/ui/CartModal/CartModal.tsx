import {FC, Suspense} from 'react'
import {Loader} from 'shared/ui/Loader/Loader'
import {CartFormLazy} from '../CartForm/CartForm.lazy'
import {Modal} from 'shared/ui/Modal/Modal'
import cls from './CartModal.module.scss'

interface CartModalProps{
	onClose:()=>void
	isOpen:boolean
}
export const CartModal:FC<CartModalProps> = ({onClose,isOpen}) => {
	return (
		<Suspense fallback={<Loader/>}>
			<Modal className={cls.CartModal} onClose={onClose} lazy isOpen={isOpen}>
				<CartFormLazy onHide={onClose}/>
			</Modal>
		</Suspense>
	)
}
