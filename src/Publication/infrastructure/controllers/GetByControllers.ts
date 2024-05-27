import { Request, Response } from "express";
import getByIdPubliCase from "../../aplication/GetByIdPubliCase";

export default class GetByIdController {
    constructor(readonly useCase: getByIdPubliCase) { }

    async run(req: Request, res: Response) {
        const result = await this.useCase.run(req.params.id)

        if (result === null){
            return res.status(404).json({
                msg: "User not found"
            });
        }

        return res.status(200).json({
            msg: "User found",
            data: result
        })

    }

}