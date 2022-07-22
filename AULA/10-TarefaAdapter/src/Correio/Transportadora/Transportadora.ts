import ITransportadora from "./ITranportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log('Transportadora: Produto enviado!!')
    }
    receive(): void {
        console.log('Transportadora: Produto recebido!!')
    }
}