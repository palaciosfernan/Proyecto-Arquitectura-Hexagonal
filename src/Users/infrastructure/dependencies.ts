import CreateUserCase from "../aplication/CreateUseCase";
import getByUseCase from "../aplication/GetByUseCase";
import MysqlUserRepository from "./MysqlUserRepository";
import CreateControllerUser from "./controllers/CreateControllers";
import GetByIdController from "./controllers/GetByCredencials";

export const mysqlUserRepository = new MysqlUserRepository();

export const createUserCase = new CreateUserCase(mysqlUserRepository);
export const getByIdUser = new getByUseCase(mysqlUserRepository);

export const createUserController = new CreateControllerUser(createUserCase);
export const ByIdUserController = new GetByIdController(getByIdUser);

