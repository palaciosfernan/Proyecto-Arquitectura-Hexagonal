import CreatePubliCase from "../aplication/CreatePubliCase";
import DeletePubliCase from "../aplication/DeleteByIdPubliCase";
import getByPubliCase from "../aplication/GetByIdPubliCase";
import DeleteAllPubliCase from "../aplication/DeleteAllPubliCase";
import MysqlPubliRepository from "./MysqlPubliRepository";
import CreateControllerPubli from "./controllers/CreateControllers";
import DeleteControllerPubli from "./controllers/DeleteControllers";
import GetByIdController from "./controllers/GetByControllers";
import DeleteAllControllerPubli from "./controllers/DeleteAllControllers";
import GetAllPubliCase from "../aplication/GetPublicase";
import GetAllController from "./controllers/GetControllers";

export const mysqlPubliRepository =new MysqlPubliRepository();

export const createPubliCase = new CreatePubliCase(mysqlPubliRepository);
export const getByIdPubli=new getByPubliCase(mysqlPubliRepository)

export const createPubliController= new CreateControllerPubli(createPubliCase);
export const ByIdPubliController = new GetByIdController(getByIdPubli)

export const deletePubliCase = new DeletePubliCase(mysqlPubliRepository);
export const deletePubliController = new DeleteControllerPubli(deletePubliCase);


export const deleteAllPubliCase = new DeleteAllPubliCase(mysqlPubliRepository);
export const deleteAllPubliController = new DeleteAllControllerPubli(deleteAllPubliCase);

export const getAllPubliCase = new GetAllPubliCase(mysqlPubliRepository);
export const getAllController = new GetAllController(getAllPubliCase);


