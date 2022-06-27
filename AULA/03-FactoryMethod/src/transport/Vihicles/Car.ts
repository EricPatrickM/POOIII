import IVihicle from './interfaces/IVehicle'

export default class Car implements IVihicle{
    StartRoute(): void {
        this.getcargo()
        console.log('Carro: Iniciando trajeto')
    }
    getcargo(): void {
        console.log('Carro: Passageiros embarcados!')
    }
}