import IPlataforms from "../Plataforms/IPlataform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission{
    constructor(private plataform : IPlataforms){
        
    }
    broadcast(): void {
        console.log('Iniciando a transmissao!!')
    }
    result(): void {
        console.log('No ar!!')
    }
}