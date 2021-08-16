import { Router } from 'express'
import { ArraysRouter } from './arrays/arrays.routes'
import { NamesRouter } from './names/names.routes'
const router = Router()

router.use(ArraysRouter)
router.use(NamesRouter)

export { router }