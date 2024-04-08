import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { generatePrompt } from './workBench.controller.js'

const router = express.Router()
// router.get('/getProducts', getProducts)
router.post('/generatePrompt', generatePrompt)

export const workBenchRoutes = router
