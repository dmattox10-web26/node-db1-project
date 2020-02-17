const express = require('express');

const accountRouter = require('./account-router')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountRouter)

server.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})

module.exports = server;