import iAircraft from "../aerea/Interfaces/iAircraft";
import ILand from "../land/interfaces/ILand";
import ITranportFactory from "./interfaces/ITransportFactory";
import Scooter from '../land/Scooter'
import Drone from '../aerea/Drone'

export default class LimeTransport implements ITranportFactory{
    createLandVehicle(): ILand {
        return new Scooter()
    }
    createAereaVehicle(): iAircraft {
        return new Drone()
    }

}