import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Modal.module.scss'
import {MouseEvent, ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {Portal} from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode,
    isOpen?: boolean,
    onClose: () => void,
    lazy?: boolean
}

const ANIMATION_DELAY = 300
export const Modal = (props: ModalProps) => {
	const {
		isOpen,
		onClose,
		children,
		className,
		lazy
	} = props
	const [isMounted, setIsMounted] = useState<boolean>(false)
	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen!,
		[cls.isClosing]: isClosing
	}
	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}, [closeHandler])
	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])
	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	if (lazy && !isMounted) {
		return null
	}

	return (<Portal element={document.getElementById('portal') as HTMLElement}>
		<div className={classNames(cls.Modal, mods, [className!])}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={onContentClick}>
					{children}
				</div>
			</div>
		</div>
	</Portal>
	)
}
