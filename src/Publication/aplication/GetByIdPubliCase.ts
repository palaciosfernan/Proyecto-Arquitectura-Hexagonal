import PubliResponse from "../domain/DTOS/PubliResponse";
import PubliRepository from "../domain/PubliRepository";
export default class getByPubliCase {
    constructor(readonly repository: PubliRepository){}

    async run (id: string){
        const result = await this.repository.getById(id);

        if (result === null) return result;

        const response : PubliResponse = {
            id:result.id,
           marca: result.marca,
            modelo: result.modelo,
            año:result.año,
            tipodecarroceria:result.tipodecarroceria,
            color:result.color,
            kilometraje:result.kilometraje,
            precio:result.precio,
            estado:result.estado,
            motor:result.motor,
            cantidad:result.cantidad

        }
        return response
    }

}
