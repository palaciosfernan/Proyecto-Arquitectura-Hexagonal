import { Router } from "express";
import {createUserController,ByIdUserController} from "./dependencies"
import '../../Database/Connection'

const userRouter = Router();

userRouter.post('/', createUserController.run.bind(createUserController));
userRouter.get('/:id', ByIdUserController.run.bind(ByIdUserController));

export default userRouter