const express = require('express')

const db = require('./data/dbConfig')

const router = exporess.Router()

router.get('/', (req, res) => {
    db('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json({ error: 'could not retrieve accounts' })
    })
})

router.get('/:id', (req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .first()
    .then(account => {
        res.status(200).json(account)
    })
    .catch(err => {
        res.status(500).json({ error: 'could not retrieve account' })
    })
})

router.post('/', (req, res) => {
    db('accounts')
    .insert(req.body, 'id')
    .then(ids => {
        res.status(201).json(ids[0])
    })
    .catch(err => {
        res.status(500).json({ error: 'could not create new record' })
    })
})

router.put('/:id', (req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .update(req.body, 'id')
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: 'could not update record' })
    })
})

router.delete('/:id', (req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: 'could not remove record '})
    })
})