import IBuilder from "../Builders/IBuilder";
import Engine from "../Components/Engine";
import { Transmission } from "../Components/Transmission";
import { VehicleType } from "../Components/VehicleType";
import Wheel from "../Components/Wheel";

export default class Director{
    constructor(private builder : IBuilder){

    }
    constructSedanCar(){
        this.builder.setVihicleType(VehicleType.SEDAN)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(1600))
        this.builder.addWhell(new Wheel(15))
        this.builder.addWhell(new Wheel(15))
        this.builder.addWhell(new Wheel(15))
        this.builder.addWhell(new Wheel(15))
    }

    constructSUV(){
        this.builder.setVihicleType(VehicleType.SUV)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(2200))
        this.builder.addWhell(new Wheel(18))
        this.builder.addWhell(new Wheel(18))
        this.builder.addWhell(new Wheel(18))
        this.builder.addWhell(new Wheel(18))
    }

    construcorPickUpTruck(){
        this.builder.setVihicleType(VehicleType.PICKUPTRUCK)
        this.builder.setSeats(3)
        this.builder.setTransmission(Transmission.MANUAL)
        this.builder.setEngine(new Engine(3000))
        this.builder.addWhell(new Wheel(25))
        this.builder.addWhell(new Wheel(25))
        this.builder.addWhell(new Wheel(25))
        this.builder.addWhell(new Wheel(25))
        this.builder.addWhell(new Wheel(25))
        this.builder.addWhell(new Wheel(25))
    }
    constructorTruck(){
        this.builder.setVihicleType(VehicleType.TRUCK)
        this.builder.setSeats(3)
        this.builder.setTransmission(Transmission.MANUAL)
        this.builder.setEngine(new Engine(5000))
        this.builder.setBucket(5000)
        this.builder.addWhell(new Wheel(40))
        this.builder.addWhell(new Wheel(40))
        this.builder.addWhell(new Wheel(40))
        this.builder.addWhell(new Wheel(40))
        this.builder.addWhell(new Wheel(40))
        this.builder.addWhell(new Wheel(40))
        this.builder.addWhell(new Wheel(40))
        this.builder.addWhell(new Wheel(40))
    }
}