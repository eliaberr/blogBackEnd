import { Request, Response } from 'express';
import UsersRepositories from '../repositories/userRepositories';

export default new class UsersController {
    async index(req: Request, res: Response) {
        const result = await UsersRepositories.findAll()
        res.json(result)
    }
    async showById(req: Request, res: Response) {
        const id = req.params.id;
        const result = await UsersRepositories.findById(id);
        res.json(result)
    }
    async showByEmail(req: Request, res: Response) {
        const email = req.params.email;
        const result = await UsersRepositories.findByEmail(email);
        res.json(result);
    }
    async store(req: Request, res: Response) {
        const body = req.body
        const result = await UsersRepositories.create(body)
        res.json(result)
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const { password } = req.body;
        const result = await UsersRepositories.update(id, password);
        res.json(result);
    }

}
