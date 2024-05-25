
export default interface PubliRequest {
    marca:string,
    modelo:string,
    año:string,
    tipodecarroceria:string,
    color:string,
    kilometraje:number,
    precio:number,
    motor:string
    
}
export interface PubliCreateRequest extends PubliRequest{
    motor: string;
    estado?:'Disponible' | 'Vendido' | null;
}