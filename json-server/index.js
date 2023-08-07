const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({})
const fs = require('fs')




server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({message: 'AUTH ERROR'})
	}
	next()


})

server.use(middlewares)
server.use(router)




server.post('/login', (req, res) => {
	const {username, password} = req.body
	const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
	const {users} = db

	const user = users.find(user => user.username === username && user.password === password)
	if(user){
		return res.json(user)
	}
	return res.status(403).json({message: 'AUTH ERROR username or password'})
})
server.listen(4000, () => {
	console.log('JSON Server is running')
})