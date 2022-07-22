import ICorreio from "./ICorreio";

export default class Correio implements ICorreio{
    sendCorreio(): void {
        console.log('Correio: Produto enviado!!')
    }
    receiveCorreio(): void {
        console.log('Correio: Produto recebido!!')
    }
}