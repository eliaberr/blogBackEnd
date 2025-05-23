import { Request, Response } from 'express';
import ArticleRepositories from '../repositories/articleRepositories';

export default new class ArticleController {
    async index(req: Request, res: Response) {
        const result = await ArticleRepositories.findAll()
        res.json(result)
    }
    async show(req: Request, res: Response) {
        const titleArticle = req.params.titleArticle
        const result = await ArticleRepositories.findArticle(titleArticle)
        res.json(result)
    }
    async store(req: Request, res: Response) {
        const body = req.body
        const result = await ArticleRepositories.create(body)
        res.json(result)
    }
    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const body = req.body;
        const result = await ArticleRepositories.update(id, body);
        res.json(result);
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        const result = await ArticleRepositories.delete(id)
        res.json(result)
    }
    async showMoreFavorite(req: Request, res: Response) {
        const result = await ArticleRepositories.findMoreFavorite()
        res.json(result)
    }
}