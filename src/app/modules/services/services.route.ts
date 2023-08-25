import express from 'express'
import { ServiceController } from './services.controller'

const router = express.Router()

router.post('/post', ServiceController.postService)
router.get('/', ServiceController.getServices)
router.delete('/delete/:id', ServiceController.deleteService)

export const serviceRoutes = router
