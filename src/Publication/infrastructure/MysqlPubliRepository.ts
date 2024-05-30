import query from "../../Database/Connection";
import { PubliCreateRequest } from "../domain/DTOS/PubliRequest";
import PubliEntry from "../domain/PubliEntry";
import PubliRepository from "../domain/PubliRepository";
import PubliResponse from "../domain/DTOS/PubliResponse";

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
            publi.estado ?? null,
            publi.cantidad,
        ];

        try {
            const [result]: any = await query(sentence, params);
            if (!result || result.affectedRows === 0) {
                console.log("No se pudo completar con el registro");
                return null;
            }

            const response: PubliEntry = {
                id: result.insertId.toString(),
                marca: publi.marca,
                motor: publi.motor,
                modelo: publi.modelo,
                año: publi.año,
                tipodecarroceria: publi.tipodecarroceria,
                color: publi.color,
                kilometraje: publi.kilometraje,
                precio: publi.precio,
                estado: publi.estado || '',
                cantidad: publi.cantidad,
            };

            return response;

        } catch (error) {
            console.log("Ha ocurrido un error durante la consulta.");
            console.error(error);
            return null;
        }
    }

    async getAll(): Promise<PubliResponse[]> {
        const sentence: string = "SELECT * FROM Vehiculos";
    
        try {
            const result: any[] | null = await query(sentence, []);
            
            if (result === null) {
                console.log("La consulta devolvió null.");
                return [];
            }
    
            const entries: any[] = result[0]; // Ajusta según la estructura de tu respuesta de consulta
    
            if (!entries || entries.length === 0) {
                console.log("No se encontraron registros.");
                return [];
            }
    
            return entries.map((entry: any) => ({
                id: entry.id ? entry.id.toString() : '',
                marca: entry.marca || '',
                modelo: entry.modelo || '',
                año: entry.año || '',
                tipodecarroceria: entry.tipodecarroceria || '',
                color: entry.color || '',
                kilometraje: entry.kilometraje || 0,
                precio: entry.precio.toString() || '0.00',
                estado: entry.estado || '',
                motor: entry.motor || '',
                cantidad: entry.cantidad || 0,
            })) as PubliResponse[];
        } catch (error) {
            console.log("Ha ocurrido un error durante la consulta.");
            console.error(error);
            return [];
        }
    }
    

    async getById(id: string): Promise<PubliEntry | null> {
        const sentence: string = "SELECT * FROM Vehiculos WHERE id = ?";
        const params = [id];

        try {
            const [entry]: any = await query(sentence, params);
            console.log(entry);
            if (!entry || entry.length === 0) {
                return null;
            }

            const result = entry[0];
            return {
                id: result.id.toString(),
                marca: result.marca,
                motor: result.motor,
                modelo: result.modelo,
                año: result.año,
                tipodecarroceria: result.tipodecarroceria,
                color: result.color,
                kilometraje: result.kilometraje,
                precio: result.precio,
                estado: result.estado,
                cantidad: result.cantidad,
            };

        } catch (error) {
            console.log("Ha ocurrido un error en la petición.");
            console.error(error);
            return null;
        }
    }

    async deleteById(id: string): Promise<boolean> {
        const sentence: string = "DELETE FROM Vehiculos WHERE id = ?";
        const params = [id];

        try {
            const [result]: any = await query(sentence, params);
            return result.affectedRows > 0;
        } catch (error) {
            console.log("Ha ocurrido un error durante la eliminación.");
            console.error(error);
            return false;
        }
    }

    async deleteAll(): Promise<boolean> {
        const sentence: string = "DELETE FROM Vehiculos";
        const params: any[] = [];

        try {
            const [result]: any = await query(sentence, params);
            return result.affectedRows > 0;
        } catch (error) {
            console.log("Ha ocurrido un error durante la eliminación de todos los registros.");
            console.error(error);
            return false;
        }
    }
}
