import {Request, Response} from 'express';
import ArticleServices from '../services/article.services';

class ArticleController {

    async getArticles(req: Request, res: Response) {

        const articles = await ArticleServices.getAllArticles();

        res.send({articles});
    }

    async createArticle(req: Request, res: Response) {

        const {title, text} = req.body;

        const article = await ArticleServices.createArticle(title, text);

        res.send({article});
    }

    async editArticles(req: Request, res: Response) {

        const {id, title, text} = req.body;

        const article = await ArticleServices.editArticle(id, title, text);

        res.send({article});
    }

    async deleteArticles(req: Request, res: Response) {

        const {id} = req.body;

        const result = await ArticleServices.deleteArticle(id);

        res.send({status: "article has been removed", article: result});
    }
}

export default new ArticleController();