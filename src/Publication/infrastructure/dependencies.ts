import CreatePubliCase from "../aplication/CreatePubliCase";
import getByPubliCase from "../aplication/GetByIdPubliCase";
import MysqlPubliRepository from "./MysqlPubliRepository";
import CreateControllerPubli from "./controllers/CreateControllers";
import GetByIdController from "./controllers/GetByCredencials";

export const mysqlPubliRepository =new MysqlPubliRepository();

export const createPubliCase = new CreatePubliCase(mysqlPubliRepository);
export const getByIdPubli=new getByPubliCase(mysqlPubliRepository)

export const createPubliController= new CreateControllerPubli(createPubliCase);
export const ByIdPubliController = new GetByIdController(getByIdPubli)

