import { Router } from 'express'
import { NamesRouter } from './names/names.routes'
const router = Router()

router.use(NamesRouter)
export { router }