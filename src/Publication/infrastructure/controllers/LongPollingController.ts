import { Request, Response } from "express";
import GetAllPubliCase from "../../aplication/GetPublicase";

export default class GetAllController {
    constructor(private readonly useCase: GetAllPubliCase) {}

    async run(req: Request, res: Response) {
        const results = await this.useCase.run();
        if (results.length === 0) {
            // Si no hay publicaciones, espera antes de responder
            setTimeout(async () => {
                const newResults = await this.useCase.run();
                if (newResults.length === 0) {
                    return res.status(404).json({
                        msg: "No se encontraron publicaciones"
                    });
                }
                return res.status(200).json({
                    msg: "Publicaciones encontradas",
                    data: newResults
                });
            }, 5000); // Espera 5 segundos antes de volver a comprobar
        } else {
            return res.status(200).json({
                msg: "Publicaciones encontradas",
                data: results
            });
        }
    }
}
