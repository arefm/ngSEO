
'use strict'

const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const _ = require('lodash')

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.use(express.static(path.join(__dirname, '..', 'public')))

const UserAgentMiddleware = (req, res, next) => {
	let botAgents = [ 'TwitterBot' ]
	if (botAgents.indexOf(req.headers['user-agent']) < 0) {
		return next()
	}
	res.render('solution-1', {
		pageTitle: 'Blah Blah...'
	}) 
}

app.get('/', UserAgentMiddleware, (req, res, next) => {
	res.render('index', {})
})

app.listen(9000, '127.0.0.1')
