import express from 'express'
import { UserRoutes } from '../modules/Auth/auth.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
