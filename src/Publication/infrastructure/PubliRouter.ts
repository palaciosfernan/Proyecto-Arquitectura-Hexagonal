import { Router } from "express";
import { createPubliController, ByIdPubliController, deletePubliController, deleteAllPubliController, getAllController } from "./dependencies";
import { verifyToken } from "../../Middleware/verifyToken";

const PubliRouter = Router();

PubliRouter.post('/', verifyToken, createPubliController.run.bind(createPubliController));
PubliRouter.get('/:id', verifyToken, ByIdPubliController.run.bind(ByIdPubliController));
PubliRouter.delete('/:id', verifyToken, deletePubliController.run.bind(deletePubliController));
PubliRouter.delete('/', verifyToken, deleteAllPubliController.run.bind(deleteAllPubliController));
PubliRouter.get('/', verifyToken, getAllController.run.bind(getAllController));

export default PubliRouter;
