import { Router } from "express";
import ArticleControllers from "./app/controllers/articleControllers";
import userControllers from "./app/controllers/usersControllers";

export const routes = Router()

routes.get('/article', ArticleControllers.index)
routes.get('/article/:titleArticle', ArticleControllers.show)
routes.post('/article', ArticleControllers.store)
routes.delete('/article/:id', ArticleControllers.delete)
routes.put('/article/:id', ArticleControllers.update)

routes.get('/users', userControllers.index)

routes.post('/users', userControllers.store)
routes.put('/users/:id', userControllers.update)
routes.get('/users/:id', userControllers.showById);
routes.get('/users/login/:email', userControllers.showByEmail);
