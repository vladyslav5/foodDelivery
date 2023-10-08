import React, {type ButtonHTMLAttributes, type FC, type ReactNode} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
	OUTLINE_DASHED = 'outlineDashed'
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl',
    SIZE_40 = 'size_40',
    SIZE_35 = 'size_35'
}

type ButtonProps = {
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
    square?: boolean
    size?: ButtonSize
    disabled?: boolean,
    rounded?: boolean,
    hover?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = props => {
	const {
		className,
		children,
		square = false,
		theme,
		size,
		disabled = false,
		rounded = false,
		hover = false,
		...otherProps
	}
        = props

	const additional = [
		className,
		theme && cls[theme],
		size && cls[size],
	]
	const mods: Record<string, boolean> = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.rounded]: rounded,
		[cls.hover]: hover
	}
	return (
		<button
			className={classNames(cls.Button, mods, additional)}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
