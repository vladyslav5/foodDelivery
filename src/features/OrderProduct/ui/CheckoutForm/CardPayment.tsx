import {Elements} from '@stripe/react-stripe-js'
import {loadStripe, StripeElementsOptions} from '@stripe/stripe-js'
import {CheckoutForm} from './CheckoutForm'
import {FC, useEffect, useState} from 'react'
import {$api} from 'shared/api/api'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import {Loader} from 'shared/ui/Loader/Loader'
import i18n from 'shared/config/i18n/i18n'
import {CartItem} from 'entities/Cart/model/type/cart'

const locale = i18n.language

const stripePromise = loadStripe('pk_test_51O11DJKRLs1AtDBSFWLtSZCO8MwXxlrxQvh81bSHHd2Kl0wVTgHERX41AuWmSV4Qx89HdN6q2TBs8sc3kMMUQzsD00PR1BN216', {
	locale: locale === 'ua' ? 'ru' : 'en-AU'
})

interface CardPaymentProps{
	products:CartItem[],
	orderId:number
}

const CardPayment:FC<CardPaymentProps> = ({orderId,products}) => {
	const [clientSecret, setClientSecret] = useState('')
	useEffect(() => {
		$api.post('/pay', {
			items: {
				products
			}
		}).then((res) => {
			setClientSecret(res.data.client_secret)
		})
	}, [])
	const {theme} = useTheme()
	const isDark = theme === Theme.DARK
	const options: StripeElementsOptions = {
		clientSecret,
		appearance: {
			theme: isDark ? 'night' : 'flat'
		}
	}
	return (
		<>
			{clientSecret ? <Elements stripe={stripePromise} options={options}>
				<CheckoutForm products={products} orderId={orderId}/>
			</Elements>
				: <Loader/>
			}
		</>
	)
}

export default CardPayment