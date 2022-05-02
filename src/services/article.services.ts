import {Article} from '../models/article.model';

class ArticleServices {

    async getAllArticles() {

        return await Article.findAll({});
    }

    async createArticle(title: string, text: string) {

        return await Article.create({title, text});
    }

    async editArticle(id: number, title: string, text: string) {

        const article =  await Article.findOne({where: {id}});

        article.set({title, text});

        await article.save();

        return article;
    }


    async deleteArticle(id: number) {

        const article = await Article.findOne({where: {id}});

        await Article.destroy({where: {id}});

        return article;
    }

}

export default new ArticleServices();