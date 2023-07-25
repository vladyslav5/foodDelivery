import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	mode: 'development',
	server: {
		port: 3001,
	},
	root: 'src',
	base: '',
	plugins: [
		react(),
	],
})
