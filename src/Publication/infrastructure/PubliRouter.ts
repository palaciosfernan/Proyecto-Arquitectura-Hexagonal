import { Router } from "express";
import { createPubliController, ByIdPubliController, deletePubliController, deleteAllPubliController, getAllController } from "./dependencies";

const PubliRouter = Router();

PubliRouter.post('/', createPubliController.run.bind(createPubliController));
PubliRouter.get('/:id', ByIdPubliController.run.bind(ByIdPubliController));
PubliRouter.delete('/:id', deletePubliController.run.bind(deletePubliController));
PubliRouter.delete('/', deleteAllPubliController.run.bind(deleteAllPubliController));
PubliRouter.get('/', getAllController.run.bind(getAllController));

export default PubliRouter;
