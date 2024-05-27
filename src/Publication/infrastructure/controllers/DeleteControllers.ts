import { Request, Response } from "express";
import DeletePubliCase from "../../aplication/DeleteByIdPubliCase";

export default class DeleteControllerPubli {
    constructor(readonly deletePubliCase: DeletePubliCase) {}

    async run(req: Request, res: Response) {
        const { id } = req.params;

        const result = await this.deletePubliCase.run(id);
        if (!result) {
            return res.status(500).json({
                data: result,
                msg: "Error al eliminar el auto"
            });
        }
        return res.status(200).json({
            data: result,
            msg: "Auto eliminado con éxito"
        });
    }
}
