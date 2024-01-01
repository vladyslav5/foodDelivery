import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './RegPage.module.scss'
import {Registration} from 'features/RegByNumber'

interface RegPageProps {
    className?: string
}

const RegPage = ({className}: RegPageProps) => {
	return (
		<div className={classNames(cls.RegPage, {}, [className!])}>
			<Registration/>
		</div>
	)
}
export default RegPage