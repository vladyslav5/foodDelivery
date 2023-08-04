import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Modal.module.scss'
import {KeyboardEvent, ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {Portal} from 'shared/ui/Portal/Portal'
import {useTheme} from 'app/providers/ThemeProvider'

interface ModalProps {
    children?: ReactNode,
    isOpen?: boolean,
    onClose: () => void
}
const ANIMATION_DELAY = 300
export const Modal = (props: ModalProps) => {
	const {
		isOpen,
		onClose,
		children
	} = props

	const [isClosing,setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen!,
		[cls.isClosing]:isClosing
	}
	const closeHandler = useCallback(()=>{
		if(onClose){
			setIsClosing(true)
			timerRef.current = setTimeout(()=>{
				onClose()
				setIsClosing(false)
			},ANIMATION_DELAY)
		}
	},[onClose])
	const onKeyDown = useCallback((e: KeyboardEvent):any=>{
		if(e.key==='Escape'){
			closeHandler()
		}
	},[closeHandler])
	useEffect(()=>{
		if(isOpen){
			window.addEventListener('keydown', onKeyDown)
		}

		return ()=>{
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown',onKeyDown)
		}
	},[isOpen,onKeyDown])
	const onContentClick = (e:MouseEvent)=>{
		e.stopPropagation()
	}
	const {theme} = useTheme()
	return (<Portal element={document.getElementById('portal') as HTMLElement}>
		<div className={classNames('modal', mods, [theme!])}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={onContentClick}>
					{children}
				</div>
			</div>
		</div>
	</Portal>
	)
}
