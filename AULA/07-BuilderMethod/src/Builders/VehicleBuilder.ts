import { Bucket } from "../Components/Bucket";
import Engine from "../Components/Engine";
import { Transmission } from "../Components/Transmission";
import { VehicleType } from "../Components/VehicleType";
import Wheel from "../Components/Wheel";
import Vehicle from "../Products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{
    private vehicle = new Vehicle()
    setBucket(Bucket: Bucket) {
        this.vehicle.bucket = Bucket
    }
    reset(): void {
        this.vehicle = new Vehicle()
    }
    getVehicle(): Vehicle{
        return this.vehicle
    }
    addWhell(value: Wheel): void {
        this.vehicle.addWhell(value)
    }
    setVihicleType(value: VehicleType): void {
        this.vehicle.vehicleType = value
    }
    setSeats(value: number): void {
        this.vehicle.seat = value
    }
    setEngine(engine: Engine): void {
        this.vehicle.engine = engine
    }
    setTransmission(transmission: Transmission): void {
        this.vehicle.transmission = transmission
    }

}