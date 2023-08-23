import express from 'express'
import { OfficeController } from './office.controller'

const router = express.Router()

router.post('/post', OfficeController.postOfficeImages)
router.get('/', OfficeController.getOfficeImages)

export const OfficeRoutes = router
