
'use strict'

const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const prerender = require('prerender-node').set('prerenderServiceUrl', 'http://0.0.0.0:8000')
const _ = require('lodash')

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(prerender)

app.get('/', (req, res, next) => {
	res.render('index', {})
})

app.listen(9000, '127.0.0.1')
