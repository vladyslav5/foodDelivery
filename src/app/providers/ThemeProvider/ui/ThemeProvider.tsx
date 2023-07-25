import React, {type FC, useMemo, useState} from 'react'
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme} from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

type ThemeProviderProps = {
	children?: React.ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme])
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
