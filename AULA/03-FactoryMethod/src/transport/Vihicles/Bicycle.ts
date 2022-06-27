import IVehicle from './interfaces/IVehicle'

export default class Bicycle implements IVehicle{
    StartRoute(): void {
        this.getcargo()
        console.log('Bicicleta: Iniciando trajeto')
    }
    getcargo(): void {
        console.log('Bicicleta: Passageiros embarcados!')
    }
}