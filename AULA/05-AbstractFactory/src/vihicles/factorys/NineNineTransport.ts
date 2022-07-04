import iAircraft from "../aerea/Interfaces/iAircraft";
import ILand from "../land/interfaces/ILand";
import ITranportFactory from "./interfaces/ITransportFactory";
import helicopter from '../aerea/helicopter'
import Motorcycle from '../land/Motorcycle'

export default class NineNineTranport implements ITranportFactory{
    createLandVehicle(): ILand {
        return new Motorcycle()
        
    }
    createAereaVehicle(): iAircraft {
        return new helicopter()
    }
}