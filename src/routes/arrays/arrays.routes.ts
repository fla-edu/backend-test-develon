import { Router } from 'express'
import { ArraysController } from '../../controllers/ArraysController'

const router = Router()
const controller = new ArraysController()

router.post('/arrays/sum', controller.sumAllNumbers)

export { router as ArraysRouter }
