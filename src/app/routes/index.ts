import express from 'express'
import { UserRoutes } from '../modules/Auth/auth.route'
import { OfficeRoutes } from '../modules/office/office.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/office',
    route: OfficeRoutes,
  },
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
