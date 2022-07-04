import ILand from "../land/interfaces/ILand"
import iAircraft from "../aerea/Interfaces/iAircraft"
import ITranportFactory from "../factorys/interfaces/ITransportFactory"

export default class Client{
    private vehicle : ILand
    private aircraft : iAircraft
    constructor(factory: ITranportFactory, tipo:string){
        switch(tipo){
            case 'Terrestre' :
                this.vehicle = factory.createLandVehicle()
                break
            case 'Aereo' :
                this.aircraft = factory.createAereaVehicle()
                break
            default:
                console.log('Tipo nao encontrado!!')
        }
    }
    startRoute() : void{
        if(this.vehicle){
            this.vehicle.startRoute()
        } else {
            if(this.aircraft)
            this.aircraft.startRoute()
        }
    }
}