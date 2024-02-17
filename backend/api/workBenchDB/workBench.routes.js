import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { generatePrompt } from './workBench.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

// router.get('/', log, getCars)
// router.get('/:id', getCarById)
router.post('/generatePrompt', generatePrompt)
// router.put('/:id',  updateCar)
// router.delete('/:id',  removeCar)
// router.delete('/:id', requireAuth, requireAdmin, removeCar)

// router.delete('/:id/msg/:msgId', removeCarMsg)

export const workBenchRoutes = router
