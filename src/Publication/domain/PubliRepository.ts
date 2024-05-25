import CreatePubliRequest from "./DTOS/PubliRequest";
import PubliEntry from "./PubliEntry";


export default interface PubliRepository {
    create(publication: CreatePubliRequest) : Promise <PubliEntry | null>
    getById (id: string): Promise <PubliEntry | null>
}   

