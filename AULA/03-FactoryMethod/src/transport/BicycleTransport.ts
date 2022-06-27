import Bicycle from './Vihicles/Bicycle'
import { Transport } from './transport'
import IVihicle from './Vihicles/interfaces/IVehicle'

export default class BicycleTransport extends Transport{
    CreateTransport() : IVihicle{
        return new Bicycle
    }
}