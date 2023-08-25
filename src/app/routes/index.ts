import express from 'express'
import { UserRoutes } from '../modules/Auth/auth.route'
import { OfficeRoutes } from '../modules/office/office.route'
import { serviceRoutes } from '../modules/services/services.route'

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
  {
    path: '/service',
    route: serviceRoutes,
  },
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
