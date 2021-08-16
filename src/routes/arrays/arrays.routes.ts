import { Router } from 'express'
import { ArraysController } from '../../controllers/ArraysController'

const router = Router()
const controller = new ArraysController()

router.post('/arrays/sum', controller.sumAllNumbers)
router.post('/arrays/removeDuplicates', controller.removeDuplicates)

export { router as ArraysRouter }
