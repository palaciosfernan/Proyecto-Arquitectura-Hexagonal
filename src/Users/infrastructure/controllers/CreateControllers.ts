import { Request, Response } from "express";
import CreateUserCase from "../../aplication/CreateUseCase";
import { UserCreateRequest } from "../../domain/DTOS/UserRequest";

export default class CreateControllerUser {
    constructor (readonly createUserCase: CreateUserCase){}

    async run (req: Request, res: Response) {
        const { username, password, nombre, rol } = req.body;

        const user: UserCreateRequest = {
            username,
            password,
            nombre,
            rol: rol ?? null,
        };

        const result = await this.createUserCase.run(user);
        
        if (!result.user) {
            return res.status(500).json({
                data: result.user,
                msg: "Error al crear un usuario"
            });
        }

        return res.status(201).json({
            data: result.user,
            token: result.token,
            msg: "Usuario creado con éxito"
        });
    }
}
