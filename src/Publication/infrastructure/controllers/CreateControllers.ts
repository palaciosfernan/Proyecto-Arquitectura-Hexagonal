import { Request, Response, json } from "express";
import CreatePubliCase from "../../aplication/CreatePubliCase";
import { PubliCreateRequest } from "../../domain/DTOS/PubliRequest";
export default class CreateControllerPubli{
    constructor (readonly createPubliCase:CreatePubliCase){}

    async run (req:Request,res:Response){
        const{marca,modelo,año,tipodecarroceria,color,kilometraje,precio,estado,motor}=req.body;
        
        const publi:PubliCreateRequest={
            marca,
            motor,
            modelo,
            año,
            tipodecarroceria,
            color,
            kilometraje,
            precio,
            estado:estado?? null,
        };
        const result = await this.createPubliCase.run(publi);
        if (!result){
            return res.status(500).json({
                data: result,
                msg: "error al crear un auto"
            });
        }
            return res.status(201).json({
                data: result,
                msg: "Usuario creado con éxito"
            })

    }
}