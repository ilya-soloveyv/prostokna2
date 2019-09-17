import { Router } from 'express'

import users from './users'
import brands from './brands'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(brands)

export default router
