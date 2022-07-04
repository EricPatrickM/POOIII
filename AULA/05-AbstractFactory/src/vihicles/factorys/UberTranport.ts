import iAircraft from "../aerea/Interfaces/iAircraft";
import ILand from "../land/interfaces/ILand";
import ITranportFactory from "./interfaces/ITransportFactory";
import Car from '../land/Car'
import airplane from '../aerea/airplane'

export default class UberTransport implements ITranportFactory{
    createLandVehicle(): ILand {
        return new Car()
    }
    createAereaVehicle(): iAircraft {
        return new airplane()
    }

}