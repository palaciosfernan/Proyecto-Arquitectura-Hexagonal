import query from "../../Database/Connection";
import { PubliCreateRequest } from "../domain/DTOS/PubliRequest";
import PubliEntry from "../domain/PubliEntry";
import PubliRepository from "../domain/PubliRepository";

export default class MysqlPubliRepository implements PubliRepository {
    constructor() { }

    async create(publi: PubliCreateRequest): Promise<PubliEntry | null> {
        const sentence =
        "INSERT INTO Vehiculos (marca, motor, modelo, año, tipodecarroceria, color, kilometraje, precio, estado, cantidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        const params: (string | number | null)[] = [
            publi.marca,
            publi.motor,
            publi.modelo,
            publi.año,
            publi.tipodecarroceria,
            publi.color,
            publi.kilometraje,
            publi.precio,
            publi.estado?? null,
            publi.cantidad,
        ];

        try {
            const [result]: any = await query(sentence, params);
            if (!result || result.length === 0) {
                console.log("No se pudo completar con el resgistro");
                return null
            }

            const response: PubliEntry = {
                id: result.insertId.toString(),
                marca:publi.marca,
                motor:publi.motor,
                modelo:publi.modelo,
                año:publi.año,
                tipodecarroceria:publi.tipodecarroceria,
                color:publi.color,
                kilometraje:publi.kilometraje,
                precio:publi.precio,
                estado:publi.estado|| '',
                cantidad:publi.cantidad,
            }

            return response

        } catch (error) {
            console.log("Ha ocurrido un error durante la consulta.");
            console.error(error);
            return null;
        }

    }

    async getById(id: string): Promise<PubliEntry | null> {
        const setence:string = "SELECT * FROM Vehiculos WHERE id = ?";
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