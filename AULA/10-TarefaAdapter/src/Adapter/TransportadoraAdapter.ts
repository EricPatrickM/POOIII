import Correio from "../Correio/Correio";
import ICorreio from "../Correio/ICorreio";
import ITransportadora from "../Correio/Transportadora/ITranportadora";

export default class TransportadoraAdapter implements ICorreio{
    constructor(private Transportadora : ITransportadora){

    }
    sendCorreio(): void {
        return this.Transportadora.send()
    }
    receiveCorreio(): void {
        return this.Transportadora.receive()
    }
}