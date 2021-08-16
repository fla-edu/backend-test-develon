import { Router } from 'express'
import { NamesController } from '../../controllers/NamesController'

const router = Router()
const controller = new NamesController()

router.get('/names', controller.namesToUpperCaseFirstLetter)

export { router as NamesRouter }
