import React, {type ButtonHTMLAttributes, type FC, type ReactNode} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline'
}

type ButtonProps = {
	className?: string;
	theme?: ThemeButton;
	children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = props => {
	const {
		className,
		children,
		theme,
		...otherProps
	}
        = props
	return (
		<button
			className={classNames(cls.Button, {}, [className!, cls[theme!]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
