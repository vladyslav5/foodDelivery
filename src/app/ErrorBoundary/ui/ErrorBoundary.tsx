import React, {ErrorInfo, ReactNode, Suspense} from 'react'
import {PageError} from 'widgets/PageError'
import {PageLoader} from 'widgets/PageLoader'


interface ErrorBoundaryProps{
    children?:ReactNode
}
interface ErrorBoundaryState{
    hasError:boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
	constructor(props:ErrorBoundaryProps) {
		super(props)
		this.state = {hasError: false}
	}

	static getDerivedStateFromError(error: Error) {
		return {hasError: true}
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo,'error')
	}

	render() {
		const {hasError} = this.state
		const {children} = this.props
		return hasError ? /*<Suspense fallback={<PageLoader/>}>*/
			<PageError/>
		/*</Suspense>*/ : children
	}
}

export default ErrorBoundary