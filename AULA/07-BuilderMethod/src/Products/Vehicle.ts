import Engine from "../Components/Engine";
import { Transmission } from "../Components/Transmission";
import { VehicleType } from "../Components/VehicleType";
import Wheel from "../Components/Wheel";

export default class Vehicle{
    private _vehicleType : VehicleType
    private _seat : number
    private _engine : Engine
    private _transmission : Transmission
    private _wheel : Wheel[] = []

    get vehicleType() : VehicleType{
        return this._vehicleType
    }
    set vehicleType(value : VehicleType){
        this._vehicleType = value
    }

    get seat() : number{
        return this._seat
    }
    set seat(value : number){
        this._seat = value
    }

    get engine() : Engine{
        return this._engine
    }
    set engine(value : Engine){
        this._engine = value
    }

    get transmission() : Transmission{
        return this._transmission
    }
    set transmission(value : Transmission){
        this._transmission = value
    }

    get Wheel() : Wheel[]{
        return this._wheel
    }

    addWhell(value : Wheel){
        this._wheel.push(value)
    }

    get whellsTotal() : number{
        return this._wheel.length
    }
}