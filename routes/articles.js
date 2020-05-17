const express = require('express')

const router = express.Router() //will give exact same capablity like get route
// router.get('/')

router.get('/new', (req, res) => {
    res.render('articles/new')
})

module.exports = router