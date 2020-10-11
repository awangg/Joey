const express = require('express')
const router = express.Router()

const { AnnouncementService } = require('../services')
const jwt = require('../utils/jwt')

/**
 * Gets all announcements
 * GET /api/v1/announcements/
 */
router.get('/', jwt.validate, async (req, res) => {
  try {
    let announcements = await AnnouncementService.getAll()
    res.status(200).json(announcements)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Creates announcement
 * POST /api/v1/announcements/
 */
router.post('/', jwt.validate, async (req, res) => {
  try {
    let announcement = await AnnouncementService.createAnnouncement(req.body)
    res.status(201).json(announcement)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Gets specific announcement
 * GET /api/v1/announcements/:id
 */
router.get('/:announcementId', jwt.validate, async (req, res) => {
  try {
    let announcement = await AnnouncementService.getSpecific(req.params.announcementId)
    res.status(200).json(announcement)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

module.exports = router