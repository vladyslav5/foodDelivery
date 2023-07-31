import React, {type FC, type ReactNode} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './AppLink.module.scss'
import {Link, type LinkProps} from 'react-router-dom'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	children?: ReactNode;
	theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = props => {
	const {
		children,
		className,
		theme = AppLinkTheme.PRIMARY,
		to,
		...otherProps
	}
        = props
	return (
		<Link
			to={to}
			{...otherProps}
			className={classNames(cls.AppLink, {}, [className!, cls[theme]])}>
			{children}
		</Link>
	)
}
