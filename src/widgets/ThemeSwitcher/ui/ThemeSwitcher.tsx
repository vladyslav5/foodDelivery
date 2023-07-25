import React, {useState} from 'react'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import Light from 'shared/assets/icons/Light.svg'
import Dark from 'shared/assets/icons/Dark.svg'

import {Slider} from 'shared/ui/Slider/Slider'

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {toggleTheme, theme} = useTheme()
	const isDark = theme === Theme.DARK
	const [checked, setChecked] = useState(isDark)

	return (
		<Slider checked={checked} setChecked={checked => {
			setChecked(checked)
			toggleTheme()
			/* Console.log(theme) */
		}}>
			{
				isDark ? <Dark/> : <Light/>
			}
		</Slider>
	)
}
