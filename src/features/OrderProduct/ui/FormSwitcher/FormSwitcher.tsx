import LoginForm from 'features/AuthByUserName/ui/LoginForm/LoginForm'
import {AddressSelect} from 'entities/Address'
import {PaymentWays} from '../PaymentWays/PaymentWays'

interface FormSwitcherProps {
    className?: string,
    number:number,
	nextPage:()=>void
	prevPage:()=>void
}

export const FormSwitcher = (props: FormSwitcherProps) => {
	const {
		className,
		prevPage,
		nextPage,
		number,
	} = props
	const onLoginSuccess=()=>{
		nextPage()
	}
	switch (number){
	case 1:
		return <LoginForm onSuccess={onLoginSuccess}/>
	case 2:
		return <AddressSelect nextPage={nextPage}/>
	case 3:
		return <PaymentWays  prev={prevPage}/>
	}
}
