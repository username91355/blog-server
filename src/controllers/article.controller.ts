import {Request, Response} from 'express'

class ArticleController {

    getArticles(req: Request, res: Response) {
        res.send({"status": "getArticles"})
    }

    createArticle(req: Request, res: Response) {
        res.send({"status": "createArticle"})
    }

    editArticles(req: Request, res: Response) {
        res.send({"status": "editArticles"})
    }

    deleteArticles(req: Request, res: Response) {
        res.send({"status": "deleteArticles"})
    }
}

export default new ArticleController()