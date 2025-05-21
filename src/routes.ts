import { Router } from "express";
import ProductControllers from "./app/controllers/productsControllers";
import userControllers from "./app/controllers/usersControllers";

export const routes = Router()

routes.get('/products', ProductControllers.index)
routes.get('/products/:id', ProductControllers.show)
routes.post('/products', ProductControllers.store)
routes.delete('/products/:id', ProductControllers.delete)
routes.put('/products/:id', ProductControllers.update)

routes.get('/users', userControllers.index)

routes.post('/users', userControllers.store)
routes.put('/users/:id', userControllers.update)
routes.get('/users/:id', userControllers.showById);
routes.get('/users/login/:email', userControllers.showByEmail);
