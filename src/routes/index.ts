import articleRoute from './article.routes'
import {Router, RouterOptions} from 'express'

const router: RouterOptions = Router()

router.use('/article', articleRoute)

export default router