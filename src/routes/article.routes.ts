import {Router, RouterOptions} from 'express'
import articleController from '../controllers/article.controller'

const router: RouterOptions = new Router()

router.get('/', articleController.getArticles)
router.post('/',articleController.createArticle)
router.put('/',articleController.editArticles)
router.delete('/', articleController.deleteArticles)

export default router