import { Transport } from "./transport";
import Motorcycle from "./Vihicles/Motorcycle";
import IVihicle from './Vihicles/interfaces/IVehicle'

export default class MotorcycleTransport extends Transport{
    protected CreateTransport() : IVihicle{
        return new Motorcycle()
    }
}