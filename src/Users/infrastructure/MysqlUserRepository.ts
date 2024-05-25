import query from "../../Database/Connection";
import { UserRequest, UserCreateRequest } from "../domain/DTOS/UserRequest";
import userEntry from "../domain/UserEntry";
import UserRepository from "../domain/UserRepository";

export default class MysqlUserRepository implements UserRepository {
    constructor() { }

    async create(user: UserCreateRequest): Promise<userEntry | null> {
        const sentence =
            "INSERT INTO Users (nombre, username, password, rol) VALUES (?, ?, ?, ?)";

        const params: (string | number | null)[] = [
            user.nombre,
            user.username,
            user.password,
            user.rol ?? null
        ];

        try {
            const [result]: any = await query(sentence, params);
            if (!result || result.length === 0) {
                console.log("Nose pudo completar con el resgistro de usuario");
                return null
            }

            const response: userEntry = {
                id: result.insertId.toString(),
                username: user.username,   
                password: user.password,
                rol: user.rol || ''
            }

            return response

        } catch (error) {
            console.log("Ha ocurrido un error durante la consulta.");
            console.error(error);
            return null;
        }

    }

    async getById(id: string): Promise<userEntry | null> {
        const setence:string = "SELECT * FROM Users WHERE id = ?";
        const params = [id];

        try {
            const [entry]: any = await query(setence, params);
            console.log(entry)
            if (entry === null || entry.length === 0) {
                return null
            }

            return entry[0];

        } catch (error) {
            console.log("Ha ocurrido un erro en la petición.");
            console.error(error);
            return null;
        }

    }

}