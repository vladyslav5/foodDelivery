import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Input, InputTheme} from 'shared/ui/Input/Input'

const MainPage = () => {
	const {t} = useTranslation('main')
	const [value,setValue] = useState('')
	const onChange = (val:string)=>{
		setValue(val)
	}
	return (
		<div>
			{t('Main page')}
			<Input theme={InputTheme.PRIMARY} value={value} onChange={onChange} />
		</div>
	)
}

export default MainPage
