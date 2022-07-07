import Client from "./vihicles/client/Client";
import UberTransport from './vihicles/factorys/UberTranport'
import Company from "./vihicles/consts/Company";
import ITranportFactory from "./vihicles/factorys/interfaces/ITransportFactory";
import NineNineTranport from './vihicles/factorys/NineNineTransport'
import LimeTransport from "./vihicles/factorys/LimeTransport";
import Category from "./vihicles/consts/Category";

const currentCompany = Company.UBER
let factory : ITranportFactory
switch(currentCompany){
    case Company.UBER :
        factory = new UberTransport()
        break;
    case Company.NINENINE :
        factory =new NineNineTranport()
        break;
    case Company.LIME :
        factory =new LimeTransport()
        break;
    default :
        console.log('companhia nao definida!')
}

const cliente = new Client(factory!, Category.AERO)

cliente.startRoute()
/*
Criar transporte terrestre sem implementar aereo, passar por parametro
*/