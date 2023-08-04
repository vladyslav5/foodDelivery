import React from 'react'
import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'
import {ErrorBoundary} from 'app/ErrorBoundary'
import 'app/styles/index.scss'

const root = createRoot(document.getElementById('root')!)

root.render(
/*	<StrictMode>*/
	<ErrorBoundary>
		<BrowserRouter>
			<ThemeProvider>
				<App/>
			</ThemeProvider>
		</BrowserRouter>
	</ErrorBoundary>
/*	</StrictMode>*/
)
