import { Router } from "express";
import { createPubliController,ByIdPubliController } from "./dependencies";
import '../../Database/Connection'

const PubliRouter = Router();

PubliRouter.post('/', createPubliController.run.bind(createPubliController));
PubliRouter.get('/:id', ByIdPubliController.run.bind(ByIdPubliController));

export default PubliRouter;