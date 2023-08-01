import React, {type ButtonHTMLAttributes, type FC, type ReactNode} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl',
}

type ButtonProps = {
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
    square?: boolean
    size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = props => {
	const {
		className,
		children,
		square = false,
		theme,
		size = ButtonSize.M,
		...otherProps
	}
        = props

	const additional = [
        className!,
        cls[theme!],
        cls[size],
	]
	const mods: Record<string, boolean> = {
		[cls.square]: square,

	}
	return (
		<button
			className={classNames(cls.Button, mods, additional)}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
