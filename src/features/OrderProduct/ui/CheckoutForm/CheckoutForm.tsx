import {PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js'
import React, {useEffect, useState} from 'react'
import {LoadingButton} from 'widgets/LoadingButton/ui/LoadingButton'
import {StripePaymentElementOptions} from '@stripe/stripe-js'
import {$api} from 'shared/api/api'
import {CartItem} from 'entities/Cart/model/type/cart'
import {Loader} from 'shared/ui/Loader/Loader'



interface CheckoutFormProps {
    className?: string,
    products: CartItem[],
    orderId: number
}

export const CheckoutForm = ({className, products, orderId}: CheckoutFormProps) => {
	const stripe = useStripe()
	const elements = useElements()


	const [message, setMessage] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		if (!stripe) {
			return
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		)

		if (!clientSecret) {
			return
		}
		stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
			switch (paymentIntent?.status) {
			case 'succeeded':
				setMessage('Payment succeeded!')
				break
			case 'processing':
				setMessage('Your payment is processing.')
				break
			case 'requires_payment_method':
				setMessage('Your payment was not successful, please try again.')
				break
			default:
				setMessage('Something went wrong.')
				break
			}
		})
	}, [stripe])

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!stripe || !elements) {
			return
		}

		setIsLoading(true)

		const {error} = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `http://localhost:3000/success?order_id=${orderId}`,
			},
		})

		if (error.type === 'card_error' || error.type === 'validation_error') {
			setMessage(error.message || null)
		} else {
			setMessage('An unexpected error occurred.')
		}
		// await $api.put(`/orders/${orderId}`, {
		// 	...order,
		// 	status: 'with error'
		// })
		setIsLoading(false)
	}

	const paymentElementOptions: StripePaymentElementOptions = {
		layout: 'tabs'
	}

	return (
		<>
			{
				!stripe || !elements && <Loader/>
			}
			<PaymentElement options={paymentElementOptions}/>
			<LoadingButton disabled={isLoading || !stripe || !elements} onClick={handleSubmit} isLoading={isLoading} text={'submit'}/>
			{message && <div>{message}</div>}
		</>
	)


}