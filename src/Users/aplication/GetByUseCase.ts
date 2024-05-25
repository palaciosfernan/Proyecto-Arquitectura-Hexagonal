import UserRepository from "../domain/UserRepository";
import UserResponse from "../domain/DTOS/UserResponse";

export default class getByUseCase {
    constructor(readonly repository: UserRepository){}
    async run (id: string){
        const result = await this.repository.getById(id);
        if (result === null) return result;
        const response:UserResponse = {
            id: result.id,
            username: result.username,
            rol: result.rol,
     
        }
        return response
    }
    

}