import { Request, Response } from 'express';
import ProductsRepositories from '../repositories/productsRepositories';

export default new class ProductController {
    async index(req: Request, res: Response) {
        const result = await ProductsRepositories.findAll()
        res.json(result)
    }

    async show(req: Request, res: Response) {
        const id = req.params.id
        const result = await ProductsRepositories.findById(id)
        res.json(result)
    }
    async store(req: Request, res: Response) {
        const body = req.body
        const result = await ProductsRepositories.create(body)
        res.json(result)
    }

    async update(req: Request, res: Response) {
        const id = req.params.id;
        const body = req.body
        const result = await ProductsRepositories.update(id, body)
        res.json(result)
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        const result = await ProductsRepositories.delete(id)
        res.json(result)
    }
}