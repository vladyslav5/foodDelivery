import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme
}

export const Text = (props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY
	}
        = props
	const mods: Record<string, boolean> = {}
	const additional = [
        className!,
        cls[theme!]
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
