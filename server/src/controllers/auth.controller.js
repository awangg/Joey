const express = require('express')
const jwt = require('../utils/jwt')
const { AuthService } = require('../services')

const router = express.Router()

/**
 * Logs in a user
 * POST /api/v1/auth/login
 */
router.post('/login', async (req, res) => {
  try {
    let user = await AuthService.login(req.body.email, req.body.password)
    res.status(200).json(user)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Signs up a new user
 * POST /api/v1/auth/signup
 */
router.post('/signup', async (req, res) => {
  try {
    let data = req.body
    let newser = await AuthService.signup(data)
    let user = await AuthService.login(newser.email, req.body.password)
    res.status(201).json(user)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Retrieves user information from JWT
 * GET /api/v1/auth/me
 */
router.get('/me', jwt.validate, async (req, res) => {
  try {
    let user = await AuthService.me(req.headers.authorization.split(' ')[1])
    res.status(200).json(user)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

module.exports = router