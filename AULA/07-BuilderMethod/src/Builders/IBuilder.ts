import Engine from "../Components/Engine"
import { Transmission } from "../Components/Transmission"
import { VehicleType } from "../Components/VehicleType"
import Wheel from "../Components/Wheel"
import Vehicle from "../Products/Vehicle"

export default interface IBuilder{
    reset() : void
    getVehicle (): Vehicle
    addWhell(value : Wheel) : void
    setVihicleType(value : VehicleType) : void
    setSeats( value : number) : void
    setEngine(engine : Engine) : void
    setTransmission(transmission : Transmission) : void
}