const express = require('express')
const router = express.Router()

router.get('/healthCheck', (req, res) => {
  res.status(200).send('All is well on /api/v1')
})

router.use('/auth', require('./auth.controller'))
router.use('/events', require('./events.controller'))
router.use('/users', require('./users.controller'))

module.exports = router