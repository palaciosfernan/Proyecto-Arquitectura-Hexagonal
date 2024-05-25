import PubliRepository from "../domain/PubliRepository";
import {PubliCreateRequest} from "../domain/DTOS/PubliRequest"

export default class CreatePubliCase {
    constructor(readonly entryRepository: PubliRepository){}

    async run (publication: PubliCreateRequest){
        const publiAdded = await this.entryRepository.create(publication);

        if(!publiAdded){
            return null
        }

        return publiAdded

    }

}