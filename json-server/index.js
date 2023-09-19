const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({})
const fs = require('fs')
const cors = require('cors')
const multer = require('multer')
const upload = multer({
	dest:path.resolve(__dirname,'temp')
})
const uuid = require('uuid')
const express = require('express')


server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(express.static(path.join(__dirname,'static')))

server.use(cors())
server.use(async (req, res, next) => {
	await new Promise(res=>setTimeout(res,1500))
	next()
})

server.post('/login', (req, res) => {
	const {username, password} = req.body
	const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
	const {users} = db
	const user = users.find(user => user.username === username && user.password === password)
	if(user){
		return res.json(user)
	}
	return res.status(403).json({message: 'AUTH ERROR username or password'})
})

server.post('/register', (req, res) => {
	const {username, password} = req.body
	const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
	const {users} = db
	const candidate = users.find(user => user.username === username)
	if(candidate){
		return res.status(403).json({message: 'username is taken'})
	}
	// fs.writeFileSync(dbPath,'UTF-8')
	return res.json({message: 'f'})
})



server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({message: 'AUTH ERROR'})
	}
	next()
})



server.put('/profile',upload.single('avatar'),async (req,res)=>{
	const avatar = req.file
	const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
	if(avatar){
		const fileName = uuid.v4() + '.jpg'
		const tempPath = req.file.path
		const targetPath = path.join(__dirname,'static',fileName)
		await fs.rename(tempPath,targetPath,()=>{})
		db.profile = {...db.profile,...req.body,avatar:fileName}
	}else {
		db.profile = {...db.profile,...req.body}
	}
	await fs.writeFile(dbPath,JSON.stringify(db),()=>{})
	console.log(db.profile)
	return res.status(200).json(db.profile)
})

server.use(router)


const dbPath = path.resolve(__dirname, 'db.json')


server.listen(4000, () => {
	console.log('JSON Server is running')
})