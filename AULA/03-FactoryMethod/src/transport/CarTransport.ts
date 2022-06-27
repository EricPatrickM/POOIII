import { Transport } from "./transport";
import Car from "./Vihicles/Car";
import IVihicle from './Vihicles/interfaces/IVehicle'

export default class CarTransport extends Transport{
    protected CreateTransport() : IVihicle{
        return new Car()
    }
}