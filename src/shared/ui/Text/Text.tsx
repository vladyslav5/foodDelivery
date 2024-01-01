import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
	ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign
    fontSize?: TextSize
}

export const Text = (props: TextProps) => {
	const {
		className,
		title,
		text,
		fontSize = TextSize.M,
		align = TextAlign.LEFT,
		theme = TextTheme.PRIMARY
	}
        = props
	const mods: Record<string, boolean> = {}
	const additional = [
		cls[theme],
		cls[fontSize],
		cls[align],
		className
	]
	return (
		<div className={classNames(cls.Text, mods, additional)}>
			{
				title && <p className={cls.title}>
					{title}
				</p>
			}
			{
				text && <p className={cls.text}>
					{text}
				</p>
			}
		</div>
	)
}
