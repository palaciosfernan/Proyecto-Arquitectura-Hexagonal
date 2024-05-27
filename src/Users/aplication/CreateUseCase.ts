import jwt from 'jsonwebtoken';
import { UserCreateRequest } from "../domain/DTOS/UserRequest";
import UserRepository from "../domain/UserRepository";
import userEntry from "../domain/UserEntry";

const JWT_SECRET = 'tu_secreto_jwt';

export default class CreateUserCase {
    constructor (readonly entryRepository: UserRepository){}

    async run (user: UserCreateRequest): Promise<{ user: userEntry | null, token: string | null }> {
        const userAdded = await this.entryRepository.create(user);

        if (!userAdded) {
            return { user: null, token: null };
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: userAdded.id, username: userAdded.username, rol: userAdded.rol },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { user: userAdded, token };
    }
}
