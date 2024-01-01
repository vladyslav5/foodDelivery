const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({})
const fs = require('fs')
const cors = require('cors')
const multer = require('multer')
const upload = multer({
	dest: path.resolve(__dirname, 'temp')
})
const uuid = require('uuid')
const express = require('express')
const {setTimeout} = require('timers')
const stripe = require('stripe')('sk_test_51O11DJKRLs1AtDBSW7JBAe5WZC38Ass4sqERIXu6SdOGoiZkE9346V3cQT9a1gzgltEZPoSrVvchpfuQIvS4uRuL00Qe6Ox6Fj')


server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(express.static(path.join(__dirname, 'static')))

server.use(cors())


server.post('/login', (req, res) => {
	const {username, password} = req.body
	const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
	const {users} = db
	const user = users.find(user => user.username === username && user.password === password)
	if (user) {
		return res.json(user)
	}
	return res.status(403).json({message: 'AUTH ERROR username or password'})
})
server.post('/reg', async (req, res, next) => {
	const {username, password} = req.body
	const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
	const {users} = db
	const candidate = users.find(user => user.username === username)
	if (candidate) {
		return res.status(403).json({message: 'USERNAME_NOT_UNIQUE'})
	}
	const maxId = Math.max(...users.map(user => Number(user.id)))+1 || 1
	const newUser = {username, password, id: `${maxId}`}
	db.users.push(newUser)
	await fs.writeFile(dbPath, JSON.stringify(db), () => {
	})
	res.json({user: newUser})
})
server.use(async (req, res, next) => {
	await new Promise(res => setTimeout(res, 3000))
	next()
})
const calculateOrderAmount = (items) => {
	const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
	const {products, orders} = db
	orders.push(items)
	const prices = items.products.map(item => products.find(prod => prod.id === item.product.id).price * item.amount)
	return prices.reduce((total, obj) => total + obj)
}
const authMiddleware = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({message: 'AUTH ERROR'})
	}
	next()
}

server.post('/pay', authMiddleware,async (req, res) => {
	const {email, items} = req.body
	if (!items || !items.products.length) {
		return res.status(403).json({message: 'cart is empty'})
	}
	try {
		const paymentIntent = await stripe.paymentIntents.create(
			{
				amount: calculateOrderAmount(items),
				receipt_email: email,
				metadata: {integration_check: 'accept_a_payment'},
				currency: 'USD',
				payment_method_types: ['card'],
			})
		return res.json({client_secret: paymentIntent.client_secret})
	} catch (e) {
		return res.status(403).json({message: 'error'})
	}
})




server.put('/profile', [authMiddleware,upload.single('avatar')], async (req, res) => {
	const avatar = req.file
	const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
	if (avatar) {
		const fileName = uuid.v4() + '.jpg'
		const tempPath = req.file.path
		const targetPath = path.join(__dirname, 'static', fileName)
		await fs.rename(tempPath, targetPath, () => {
		})
		db.profile = {...db.profile, ...req.body, avatar: fileName}
	} else {
		db.profile = {...db.profile, ...req.body}
	}
	await fs.writeFile(dbPath, JSON.stringify(db), () => {
	})
	console.log(db.profile)
	return res.status(200).json(db.profile)
})

server.use(router)


const dbPath = path.resolve(__dirname, 'db.json')


server.listen(4000, () => {
	console.log('JSON Server is running')
})