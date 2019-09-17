import { Router } from 'express'

const router = Router()
const Brand = require('../../models').brand

router.get('/brands', async (req, res, next) => {
  var brands = await Brand.findAll()
  res.json(brands)
})

export default router
