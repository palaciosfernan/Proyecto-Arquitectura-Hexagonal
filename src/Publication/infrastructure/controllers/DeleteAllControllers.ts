import { Request, Response } from "express";
import DeleteAllPubliCase from "../../aplication/DeleteAllPubliCase";

export default class DeleteAllControllerPubli {
    constructor(readonly deleteAllPubliCase: DeleteAllPubliCase) {}

    async run(req: Request, res: Response) {
        const result = await this.deleteAllPubliCase.run();
        if (!result) {
            return res.status(500).json({
                data: result,
                msg: "Error al eliminar todos los autos"
            });
        }
        return res.status(200).json({
            data: result,
            msg: "Todos los autos eliminados con éxito"
        });
    }
}
