import TransportadoraAdapter from "./Adapter/TransportadoraAdapter";
import Correio from "./Correio/Correio";
import ICorreio from "./Correio/ICorreio";
import Transportadora from "./Correio/Transportadora/Transportadora";

let teste : ICorreio = new Correio()
teste.receiveCorreio()
teste.sendCorreio()

teste = new TransportadoraAdapter(new Transportadora())
teste.sendCorreio()
teste.receiveCorreio()