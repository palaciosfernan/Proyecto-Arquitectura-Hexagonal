import PubliRepository from "../domain/PubliRepository";
import PubliResponse from "../domain/DTOS/PubliResponse";

export default class GetAllPubliCase {
    constructor(readonly repository: PubliRepository) {}

    async run(): Promise<PubliResponse[]> {
        const results = await this.repository.getAll();

        return results.map(result => ({
            id: result.id,
            marca: result.marca,
            modelo: result.modelo,
            año: result.año,
            tipodecarroceria: result.tipodecarroceria,
            color: result.color,
            kilometraje: result.kilometraje,
            precio: result.precio,
            estado: result.estado,
            motor: result.motor,
            cantidad: result.cantidad
        }));
    }
}
